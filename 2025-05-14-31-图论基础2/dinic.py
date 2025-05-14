# Ubuntu下建议安装中文字体（Noto Sans CJK SC）：
# sudo apt-get update
# sudo apt-get install fonts-noto-cjk
# 并确保如下设置：
# rcParams['font.sans-serif'] = ['Noto Sans CJK SC']

import networkx as nx
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from matplotlib import rcParams
import copy
from collections import deque, defaultdict

# 设置matplotlib支持中文和大字号
rcParams['font.sans-serif'] = [
    'SimHei', 'Arial Unicode MS', 'Microsoft YaHei',
    'Noto Sans CJK SC', 'Noto Sans CJK SC Regular',
    'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'WenQuanYi Micro Hei',
]
rcParams['axes.unicode_minus'] = False
rcParams['font.size'] = 20

# 1. 设计更复杂的分层网络，保证三轮以上分层图才结束
edges = [
    ('s', 'a', 5), ('s', 'b', 9),
    ('a', 'd', 3), ('a', 'e', 8), ('b', 'd', 6), ('b', 'e', 7),
    ('d', 'g', 1), ('d', 'h', 3), ('e', 'g', 14), ('e', 'h', 3),
    ('b', 'g', 4), ('h', 'a', 5),
    ('g', 't', 15), ('h', 't', 10)
]
G = nx.DiGraph()
for u, v, c in edges:
    G.add_edge(u, v, capacity=c)

# 节点布局
pos = {
    's': (0, 1.5),
    'a': (1, 2.5), 'b': (1, 1.5), 'c': (1, 0.5),
    'd': (2, 2.5), 'e': (2, 1.5), 'f': (2, 0.5),
    'g': (3, 2.5), 'h': (3, 1.5), 'i': (3, 0.5),
    't': (4, 1.5)
}

fig, ax = plt.subplots(figsize=(10, 5))
fig.subplots_adjust(left=0, right=0.98, top=0.98, bottom=0.08)

# 动画步骤收集
steps = []  # (flow, 层次, 当前BFS层, 当前增广路径, 当前推流, 当前最大流, 步骤类型, 其它说明, 分层图边集, 残量反向边集)

# Dinic主流程
flow = defaultdict(lambda: defaultdict(int))
max_flow = 0
step_id = 0
while True:
    # 2. 分层BFS动画
    level = { 's': 0 }
    q = deque(['s'])
    bfs_layers = [['s']]
    bfs_edges = []
    visited = set(['s'])
    while q:
        cur_layer = []
        for _ in range(len(q)):
            u = q.popleft()
            for v in G.successors(u):
                if v not in visited and G[u][v]['capacity'] - flow[u][v] > 0:
                    level[v] = level[u] + 1
                    q.append(v)
                    cur_layer.append(v)
                    bfs_edges.append((u, v))
                    visited.add(v)
        if cur_layer:
            bfs_layers.append(cur_layer)
    # 记录分层BFS每一层动画帧
    for i, layer_nodes in enumerate(bfs_layers):
        # 只高亮到当前层的节点和边
        highlight_nodes = set()
        highlight_edges = set()
        for j in range(i+1):
            highlight_nodes.update(bfs_layers[j])
        for u, v in bfs_edges:
            if u in highlight_nodes and v in highlight_nodes and level[v] == level[u] + 1:
                highlight_edges.add((u, v))
        # 残量反向边（可用）
        reverse_edges = set()
        for u in highlight_nodes:
            for v in G.predecessors(u):
                if v in highlight_nodes and flow[u][v] > 0:
                    reverse_edges.add((u, v))
        steps.append((copy.deepcopy(flow), dict(level), i, [], 0, max_flow, 'bfs_layer', f'分层BFS第{i}层', highlight_edges, reverse_edges))
    if 't' not in level:
        break
    # 3. 只保留分层图，推流动画
    # 构建分层图
    layer_edges = set()
    for u, v in G.edges:
        if u in level and v in level and level[v] == level[u] + 1 and G[u][v]['capacity'] - flow[u][v] > 0:
            layer_edges.add((u, v))
    # 残量反向边
    reverse_edges = set()
    for u, v in G.edges:
        if v in level and u in level and level[u] == level[v] + 1 and flow[v][u] > 0:
            reverse_edges.add((v, u))
    # 多次DFS增广
    def dfs(u, up, path, used_edges):
        if u == 't':
            return up, path
        for v in G.successors(u):
            if (u, v) in layer_edges and (u, v) not in used_edges and G[u][v]['capacity'] - flow[u][v] > 0:
                pushed, ppath = dfs(v, min(up, G[u][v]['capacity'] - flow[u][v]), path + [(u, v)], used_edges)
                if pushed > 0:
                    return pushed, ppath
        return 0, []
    used_edges = set()
    while True:
        pushed, aug_path = dfs('s', float('inf'), [], used_edges)
        if pushed == 0:
            break
        # 增广路径动画（红色逐步点亮）
        for i in range(len(aug_path)):
            sub_path = aug_path[:i+1]
            steps.append((copy.deepcopy(flow), dict(level), None, list(sub_path), min(G[u][v]['capacity'] - flow[u][v] for u, v in sub_path), max_flow, 'augmenting', f'分层图内增广', layer_edges, reverse_edges))
        # 推流动画（整条路径变绿，推流）
        min_push = min(G[u][v]['capacity'] - flow[u][v] for u, v in aug_path)
        for u, v in aug_path:
            flow[u][v] += min_push
        max_flow += min_push
        steps.append((copy.deepcopy(flow), dict(level), None, list(aug_path), min_push, max_flow, 'flow_update', f'推流', layer_edges, reverse_edges))
        # 推满的边加入used_edges
        for u, v in aug_path:
            if flow[u][v] == G[u][v]['capacity']:
                used_edges.add((u, v))
    step_id += 1
# 终止帧
steps.append((copy.deepcopy(flow), {}, None, [], 0, max_flow, 'final', '已达到最大流！', set(), set()))

# 动画帧重复策略
STEP_REPEAT_BFS = 2
STEP_REPEAT_AUG = 2
STEP_REPEAT_UPDATE = 2
STEP_REPEAT_FINAL = 8
STEP_REPEAT_LAYER_END = 4 

display_steps = []
for idx, s in enumerate(steps):
    if s[6] == 'bfs_layer':
        display_steps.extend([s]*STEP_REPEAT_BFS)
    elif s[6] == 'augmenting':
        display_steps.extend([s]*STEP_REPEAT_AUG)
    elif s[6] == 'flow_update':
        display_steps.extend([s]*STEP_REPEAT_UPDATE)
        # 检查下一个step是否不是augmenting/flow_update，且不是final，说明本分层图已无增广路
        if idx+1 < len(steps) and steps[idx+1][6] not in ['augmenting', 'flow_update']:
            # 插入特殊帧
            layer_end_step = list(s)
            layer_end_step[6] = 'layer_end'  # 特殊标记
            display_steps.extend([tuple(layer_end_step)]*STEP_REPEAT_LAYER_END)
    elif s[6] == 'final':
        display_steps.extend([s]*STEP_REPEAT_FINAL)

def update(step):
    ax.clear()
    flow, level, bfs_layer, aug_path, pushed, cur_flow, mode, info, layer_edges, reverse_edges = display_steps[step]
    step_num = sum(1 for i in range(step) if display_steps[i][6] == 'flow_update')
    if mode == 'flow_update':
        step_num += 1
    # 画原图淡化
    if mode in ['bfs_layer']:
        nx.draw(G, pos, ax=ax, with_labels=True, node_color='whitesmoke', node_size=800, arrowsize=20, font_size=26, edge_color='lightgray', width=1)
        # 高亮同一层的点
        if bfs_layer is not None:
            for node in level:
                if level[node] == bfs_layer:
                    ax.scatter(pos[node][0], pos[node][1], s=1600, facecolors='none', edgecolors='blue', linewidths=4, zorder=3)
        # 显示分层边
        for u, v in G.edges:
            if u in level and v in level and level[v] == level[u] + 1:
                if flow[u][v] == G[u][v]['capacity']:
                    # 流满的边显示为灰色实线
                    nx.draw_networkx_edges(G, pos, edgelist=[(u, v)], edge_color='gray', width=2, ax=ax, arrowsize=20)
                elif (u, v) in layer_edges:
                    # 未流满且可用的边显示为浅绿色
                    nx.draw_networkx_edges(G, pos, edgelist=[(u, v)], edge_color='#b6e3b6', width=2, ax=ax, arrowsize=20, alpha=0.5)
        # 显示分层边的标签
        labels = {}
        for u, v in G.edges:
            if u in level and v in level and level[v] == level[u] + 1:
                f = flow[u][v] if v in flow[u] else 0
                labels[(u, v)] = f"{f}/{G[u][v]['capacity']}"
        nx.draw_networkx_edge_labels(G, pos, edge_labels=labels, ax=ax, font_size=18)
    else:
        nx.draw_networkx_nodes(G, pos, ax=ax, node_color='whitesmoke', node_size=800)
        nx.draw_networkx_labels(G, pos, ax=ax, font_size=26)
        full_edges = [(u, v) for (u, v) in layer_edges if flow[u][v] == G[u][v]['capacity']]
        remain_edges = [(u, v) for (u, v) in layer_edges if flow[u][v] < G[u][v]['capacity']]
        if full_edges:
            nx.draw_networkx_edges(G, pos, edgelist=full_edges, edge_color='gray', width=3, ax=ax, arrowsize=20, style='dashed')
        if remain_edges:
            nx.draw_networkx_edges(G, pos, edgelist=remain_edges, edge_color='blue', width=3, ax=ax, arrowsize=20)
    if mode in ['bfs_layer', 'augmenting', 'flow_update'] and reverse_edges:
        nx.draw_networkx_edges(G, pos, edgelist=list(reverse_edges), edge_color='purple', width=2, ax=ax, arrowsize=18, style='dashed', connectionstyle='arc3,rad=-0.2')
        for u, v in reverse_edges:
            x = (pos[u][0] + pos[v][0]) / 2
            y = (pos[u][1] + pos[v][1]) / 2
            ax.text(x, y-0.18, '反向边', color='purple', fontsize=14, ha='center', va='top', bbox=dict(facecolor='white', alpha=0.8, edgecolor='purple', boxstyle='round,pad=0.2'))
    if mode == 'augmenting' and aug_path:
        nx.draw_networkx_edges(G, pos, edgelist=aug_path, edge_color='r', width=4, ax=ax, arrowsize=20)
    if mode == 'flow_update' and aug_path:
        nx.draw_networkx_edges(G, pos, edgelist=aug_path, edge_color='g', width=4, ax=ax, arrowsize=20)
    # 显示容量标签
    if mode in ['bfs_layer']:
        # 分层图阶段的标签已在上面处理
        pass
    else:
        # 增广推流阶段的标签
        drawn = set()
        for u, v in layer_edges:
            f = flow[u][v] if v in flow[u] else 0
            label = f"{f}/{G[u][v]['capacity']}"
            x = (pos[u][0] + pos[v][0]) / 2
            y = (pos[u][1] + pos[v][1]) / 2
            # 判断是否为交叉边（同一层有多个u->v，或u->v和v->u都在layer_edges）
            offset = 0
            if ((v, u) in layer_edges and (u, v) not in drawn) or (abs(pos[u][1] - pos[v][1]) > 0.5):
                offset = 0.18 if pos[u][1] > pos[v][1] else -0.18
            # 脚叉边的标签沿45°平移，不保证所有情况都能避免歧义，需要根据网络形状调整
            ax.text(x+abs(offset), y-offset, label, color='black', fontsize=16, ha='center', va='center', bbox=dict(facecolor='white', alpha=0.8, edgecolor='gray', boxstyle='round,pad=0.1'))
            drawn.add((u, v))
    # 右下角提示
    if mode == 'bfs_layer':
        info_text = f"Step {step_num}\n当前最大流: {cur_flow}"
    elif mode == 'augmenting':
        path_str = '->'.join([u for u, v in aug_path] + [aug_path[-1][1]]) if aug_path else ''
        info_text = f"Step {step_num}\n分层图内增广: {path_str}\n可推流量: {pushed}\n当前最大流: {cur_flow}"
    elif mode == 'flow_update':
        path_str = '->'.join([u for u, v in aug_path] + [aug_path[-1][1]]) if aug_path else ''
        info_text = f"Step {step_num}\n推流路径: {path_str}\n本次推流: {pushed}\n当前最大流: {cur_flow}"
    elif mode == 'layer_end':
        info_text = f"Step {step_num}\n当前最大流: {cur_flow}"
        ax.text(0.5, 0.5, '本次分层图已无增广路', transform=ax.transAxes, ha='center', va='center', fontsize=32,
                bbox=dict(facecolor='white', alpha=0.95, edgecolor='blue', boxstyle='round,pad=0.4'), color='blue', zorder=10)
    elif mode == 'final':
        info_text = f"Step {step_num}\n当前最大流: {cur_flow}"
        ax.text(0.5, 0.5, '已达到最大流！', transform=ax.transAxes, ha='center', va='center', fontsize=36,
                bbox=dict(facecolor='white', alpha=0.98, edgecolor='green', boxstyle='round,pad=0.5'), color='red', zorder=10)
    else:
        info_text = f"Step {step_num}\n当前最大流: {cur_flow}"
    ax.text(0.98, 0.9, info_text, transform=ax.transAxes, ha='right', va='top', fontsize=18,
            bbox=dict(facecolor='white', alpha=0.8, edgecolor='gray'))
    ax.axis('off')

ani = animation.FuncAnimation(fig, update, frames=len(display_steps), interval=500, repeat_delay=4000)

# 保存为GIF
ani.save('dinic.gif', writer='pillow')

print("动画已保存为 dinic.gif")
