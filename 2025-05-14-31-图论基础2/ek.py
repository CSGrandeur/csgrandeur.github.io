# Ubuntu下建议安装中文字体（Noto Sans CJK SC）：
# sudo apt-get update
# sudo apt-get install fonts-noto-cjk
# 并确保如下设置：
# rcParams['font.sans-serif'] = ['Noto Sans CJK SC']

import networkx as nx
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import numpy as np
from matplotlib import rcParams
import matplotlib.font_manager as fm
import copy

# 设置matplotlib支持中文和大字号
rcParams['font.sans-serif'] = [
    'SimHei', 
    'Arial Unicode MS', 
    'Microsoft YaHei',
    'Noto Sans CJK SC', 
    'Noto Sans CJK SC Regular',
    'Noto Sans CJK JP',
    'Noto Sans CJK KR',
    'Noto Sans CJK TC',
    'Noto Sans CJK HK',
    'WenQuanYi Micro Hei', 
]
rcParams['axes.unicode_minus'] = False
rcParams['font.size'] = 20  # 全局字号

# 构建示例网络
G = nx.DiGraph()
# 添加边和容量（与图中一致）
G.add_edge('s', '1', capacity=8)
G.add_edge('s', '2', capacity=12)
G.add_edge('1', '3', capacity=6)
G.add_edge('1', '4', capacity=10)
G.add_edge('2', '1', capacity=2)
G.add_edge('2', '3', capacity=10)
G.add_edge('4', '3', capacity=2)
G.add_edge('3', 't', capacity=8)
G.add_edge('4', 't', capacity=10)

# Edmonds-Karp算法实现，记录每一步
from collections import deque, defaultdict

steps = []  # 每一步的流量和路径

# 初始化流量为0
def edmonds_karp(G, source, sink):
    flow = defaultdict(lambda: defaultdict(int))
    max_flow = 0
    while True:
        # BFS找增广路
        parent = {source: None}
        q = deque([source])
        while q:
            u = q.popleft()
            for v in G.successors(u):
                cap = G[u][v]['capacity'] - flow[u][v]
                if cap > 0 and v not in parent:
                    parent[v] = u
                    q.append(v)
            for v in G.predecessors(u):
                if flow[v][u] > 0 and v not in parent:
                    parent[v] = u
                    q.append(v)
        if sink not in parent:
            break
        # 反向推路径
        path = []
        v = sink
        bottleneck = float('inf')
        while v != source:
            u = parent[v]
            if G.has_edge(u, v):
                cap = G[u][v]['capacity'] - flow[u][v]
                bottleneck = min(bottleneck, cap)
            else:
                bottleneck = min(bottleneck, flow[v][u])
            path.append((u, v))
            v = u
        path = path[::-1]
        # 拆分为多帧：每一帧高亮从源点到当前节点的子路径，并实时显示瓶颈流量
        cur_bottleneck = float('inf')
        for i in range(len(path)):
            sub_path = path[:i+1]
            cur_bottleneck = float('inf')
            for u, v in sub_path:
                if G.has_edge(u, v):
                    cap = G[u][v]['capacity'] - flow[u][v]
                    cur_bottleneck = min(cur_bottleneck, cap)
                else:
                    cur_bottleneck = min(cur_bottleneck, flow[v][u])
            steps.append((copy.deepcopy(flow), list(sub_path), cur_bottleneck, max_flow, 'augment_path_step'))
        # 最后一帧：整条路径高亮，执行流量更新
        v = sink
        while v != source:
            u = parent[v]
            if G.has_edge(u, v):
                flow[u][v] += bottleneck
            else:
                flow[v][u] -= bottleneck
            v = u
        max_flow += bottleneck
        steps.append((copy.deepcopy(flow), list(path), bottleneck, max_flow, 'flow_update'))
    return max_flow

max_flow = edmonds_karp(G, 's', 't')

# 动画绘制
pos = {
    's': (0.5, 1), 
    '1': (1.5, 2),
    '2': (1.5, 0),
    '3': (2.5, 1),
    '4': (3.5, 2),
    't': (4.5, 1)
}
# >> 图片尺寸（宽, 高），可调整整体空间
fig, ax = plt.subplots(figsize=(10, 5))
fig.subplots_adjust(left=0, right=0.98, top=0.98, bottom=0.08)  # << 调整图片四周留白

# 边标签
edge_labels = {(u, v): f"{G[u][v]['capacity']}" for u, v in G.edges}

# 生成每帧的时长列表（重复帧法）
STEP_REPEAT_UPDATE = 2
STEP_REPEAT_SEARCH = 1
FINAL_REPEAT = 8  # 700ms*8约等于5.6秒

display_steps = []
last_flow_update_idx = -1
for idx, s in enumerate(steps):
    if s[4] == 'flow_update':
        display_steps.extend([s]*STEP_REPEAT_UPDATE)
        last_flow_update_idx = len(display_steps) - STEP_REPEAT_UPDATE  # 记录最后一次flow_update在display_steps中的起始索引
    else:
        display_steps.extend([s]*STEP_REPEAT_SEARCH)
# 追加"已达到最大流"帧
if last_flow_update_idx != -1:
    final_step = list(display_steps[last_flow_update_idx])
    final_step[4] = 'final_maxflow'  # 标记为最大流帧
    display_steps.extend([tuple(final_step)]*FINAL_REPEAT)

# 动画帧绘制函数
def update(step):
    ax.clear()
    flow, path, bottleneck, cur_flow, mode = display_steps[step]
    # step编号只在flow_update帧递增，其它帧step显示为即将推流的step编号
    step_num = sum(1 for i in range(step) if display_steps[i][4] == 'flow_update')
    step_num //= STEP_REPEAT_UPDATE
    if mode == 'flow_update':
        step_num += 1
    nx.draw(G, pos, ax=ax, with_labels=True, node_color='lightblue', node_size=800, arrowsize=20, font_size=26)
    labels = {}
    for u, v in G.edges:
        f = flow[u][v] if v in flow[u] else 0
        labels[(u, v)] = f"{f}/{G[u][v]['capacity']}"
    nx.draw_networkx_edge_labels(G, pos, edge_labels=labels, ax=ax, font_size=26)
    edgelist = [(u, v) for u, v in path if G.has_edge(u, v)]
    forward_edges = []
    purple_edges = []
    for u, v in path:
        if G.has_edge(u, v):
            forward_edges.append((u, v))
        elif G.has_edge(v, u):
            purple_edges.append((u, v))  # 以推流方向u->v绘制
    if mode == 'flow_update' or mode == 'final_maxflow':
        nx.draw_networkx_edges(G, pos, edgelist=forward_edges, edge_color='g', width=3, ax=ax, arrowsize=20)
        if purple_edges:
            nx.draw_networkx_edges(G, pos, edgelist=purple_edges, edge_color='g', width=3, ax=ax, arrowsize=20, style='dashed', connectionstyle='arc3,rad=0.2')
        info = '已沿增广路加流量'
    else:
        if forward_edges:
            nx.draw_networkx_edges(G, pos, edgelist=forward_edges, edge_color='r', width=3, ax=ax, arrowsize=20)
        if purple_edges:
            nx.draw_networkx_edges(G, pos, edgelist=purple_edges, edge_color='purple', width=4, ax=ax, arrowsize=20, style='dashed', connectionstyle='arc3,rad=0.2')
            for u, v in purple_edges:
                x = (pos[u][0] + pos[v][0]) / 2
                y = (pos[u][1] + pos[v][1]) / 2
                ax.text(x, y+0.18, '反向推流', color='purple', fontsize=18, ha='center', va='bottom',
                        bbox=dict(facecolor='white', alpha=0.9, edgecolor='purple', boxstyle='round,pad=0.2'))
        info = '寻找增广路中'
    path_str = '->'.join([u for u, v in path] + [path[-1][1]]) if path else ''
    if mode == 'final_maxflow':
        title = f"Step {step_num}\n已达到最大流！\n最大流: {cur_flow}"
    else:
        if path and path[-1][1] == 't':
            flow_label = f"可增加流量: {bottleneck}"
        else:
            flow_label = f"当前瓶颈流量: {bottleneck}"
        title = f"Step {step_num} {info}\n当前路径: {path_str}\n{flow_label}\n当前最大流: {cur_flow}"
    ax.text(0.95, 0.02, title, transform=ax.transAxes, ha='right', va='bottom', fontsize=18,
            bbox=dict(facecolor='white', alpha=0.8, edgecolor='gray'))
    ax.axis('off')

# >> 每帧时长 interval（毫秒），repeat_delay为循环间隔
ani = animation.FuncAnimation(fig, update, frames=len(display_steps), interval=700, repeat_delay=4000)  # << 每帧时长

# 保存为GIF
ani.save('ek.gif', writer='pillow')

print(f"最大流: {max_flow}, 动画已保存为 ek.gif")

# # 检查matplotlib能否识别字体
# for font in fm.findSystemFonts(fontpaths=None, fontext='ttf'):
#     if 'NotoSansCJK' in font or 'Noto Sans' in font:
#         print(font)
