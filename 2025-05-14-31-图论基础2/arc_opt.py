import networkx as nx
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from matplotlib import rcParams
import copy

# 设置matplotlib支持中文和大字号
rcParams['font.sans-serif'] = [
    'SimHei', 'Arial Unicode MS', 'Microsoft YaHei',
    'Noto Sans CJK SC', 'Noto Sans CJK SC Regular',
    'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'WenQuanYi Micro Hei',
]
rcParams['axes.unicode_minus'] = False
rcParams['font.size'] = 20

# 1. 构建网络
G = nx.DiGraph()

# 添加节点
# 前驱节点（来自不同方向）
prev_nodes = [
    'prev1', 'prev2', 'prev3', 'prev4',  # 左侧
    'prev5', 'prev6', 'prev7', 'prev8',  # 左上
    'prev9', 'prev10', 'prev11', 'prev12'  # 左下
]
for node in prev_nodes:
    G.add_node(node)

# 中心节点
G.add_node('s')

# 后继节点
for node in ['a', 'b', 'c', 'd']:
    G.add_node(node)

# 终点节点
for i in range(1, 5):
    G.add_node(f'next{i}')

# 添加边
# 前驱节点到s的边
for node in prev_nodes:
    G.add_edge(node, 's', capacity=0)

# s到后继节点的边
G.add_edge('s', 'a', capacity=5)
G.add_edge('s', 'b', capacity=3)
G.add_edge('s', 'c', capacity=4)
G.add_edge('s', 'd', capacity=2)

# 后继节点到终点的边
for i, node in enumerate(['a', 'b', 'c', 'd'], 1):
    G.add_edge(node, f'next{i}', capacity=0)

# 2. 设置节点位置
pos = {
    # 前驱节点（左侧）
    'prev1': (-1, 1.5), 'prev2': (-1, 0.5), 'prev3': (-1, -0.5), 'prev4': (-1, -1.5),
    # 前驱节点（左上）
    'prev5': (-1.5, 2), 'prev6': (-1.5, 1), 'prev7': (-1.5, 0), 'prev8': (-1.5, -1),
    # 前驱节点（左下）
    'prev9': (-1.5, -2), 'prev10': (-1.5, -1.5), 'prev11': (-1.5, -0.5), 'prev12': (-1.5, 0.5),
    # 中心节点
    's': (0, 0),
    # 后继节点（中间）
    'a': (1, 1.5), 'b': (1, 0.5), 'c': (1, -0.5), 'd': (1, -1.5),
    # 终点节点（右侧）
    'next1': (2, 1.5), 'next2': (2, 0.5), 'next3': (2, -0.5), 'next4': (2, -1.5)
}

# 3. 创建图形
fig, ax = plt.subplots(figsize=(12, 8))
fig.subplots_adjust(left=0.1, right=0.9, top=0.9, bottom=0.1)

# 4. 动画步骤收集
steps = []  # (flow, work, current_edge, mode, info)

# 5. 模拟DFS过程
flow = {('s', 'a'): 0, ('s', 'b'): 0, ('s', 'c'): 0, ('s', 'd'): 0}
work = {'s': 0}  # 初始化为第一条边
current_edge = None

# 第一次DFS
steps.append((copy.deepcopy(flow), dict(work), None, 'start', '开始DFS，work指向第一条边'))
# 尝试s->a
current_edge = ('s', 'a')
steps.append((copy.deepcopy(flow), dict(work), current_edge, 'try', '尝试边 s->a'))
# 尝试s->b
work['s'] = 1  # 移动到下一条边
current_edge = ('s', 'b')
steps.append((copy.deepcopy(flow), dict(work), current_edge, 'try', '尝试边 s->b'))
# s->b已满
flow[('s', 'b')] = G['s']['b']['capacity']
steps.append((copy.deepcopy(flow), dict(work), current_edge, 'full', '边 s->b 已满，work移动到下一条边'))

# 第二次DFS（从work=2开始）
work['s'] = 2  # 移动到下一条边
# 添加回溯动画帧
steps.append((copy.deepcopy(flow), dict(work), ('prev1', 's'), 'backtrack', '回溯后，再次DFS到s'))
steps.append((copy.deepcopy(flow), dict(work), None, 'restart', '重新开始DFS，work指向第三条边'))
# 尝试s->c
current_edge = ('s', 'c')
steps.append((copy.deepcopy(flow), dict(work), current_edge, 'try', '尝试边 s->c'))
# 尝试s->d
work['s'] = 3  # 移动到下一条边
current_edge = ('s', 'd')
steps.append((copy.deepcopy(flow), dict(work), current_edge, 'try', '尝试边 s->d'))

# 6. 动画帧重复策略
STEP_REPEAT = 2
display_steps = []
for s in steps:
    display_steps.extend([s]*STEP_REPEAT)

def update(step):
    ax.clear()
    flow, work, current_edge, mode, info = display_steps[step]
    
    # 7. 绘制图形
    # 7.1 绘制节点
    # 前驱节点（灰色）
    nx.draw_networkx_nodes(G, pos, nodelist=prev_nodes,
                          node_color='lightgray', node_size=600, ax=ax)
    # 中心节点（白色）
    nx.draw_networkx_nodes(G, pos, nodelist=['s'],
                          node_color='whitesmoke', node_size=1000, ax=ax)
    # 后继节点（白色）
    nx.draw_networkx_nodes(G, pos, nodelist=['a', 'b', 'c', 'd'],
                          node_color='whitesmoke', node_size=1000, ax=ax)
    # 终点节点（灰色）
    nx.draw_networkx_nodes(G, pos, nodelist=[f'next{i}' for i in range(1, 5)],
                          node_color='lightgray', node_size=600, ax=ax)
    
    # 7.2 绘制节点标签
    # 前驱和终点节点标签
    nx.draw_networkx_labels(G, pos,
                           labels={node: '...' for node in prev_nodes} |
                                 {f'next{i}': '...' for i in range(1, 5)},
                           font_size=16, ax=ax)
    # 主要节点标签
    nx.draw_networkx_labels(G, pos,
                           labels={'s': 's', 'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd'},
                           font_size=26, ax=ax)
    
    # 7.3 绘制边
    # 前驱节点到s的边
    nx.draw_networkx_edges(G, pos,
                          edgelist=[(node, 's') for node in prev_nodes],
                          edge_color='lightgray', width=1, arrowsize=15, ax=ax)
    # s到后继节点的边
    nx.draw_networkx_edges(G, pos,
                          edgelist=[('s', node) for node in ['a', 'b', 'c', 'd']],
                          edge_color='lightgray', width=1, arrowsize=20, ax=ax)
    # 后继节点到终点的边
    nx.draw_networkx_edges(G, pos,
                          edgelist=[(node, f'next{i}') for i, node in enumerate(['a', 'b', 'c', 'd'], 1)],
                          edge_color='lightgray', width=1, arrowsize=15, ax=ax)
    
    # 7.4 显示work值
    ax.text(pos['s'][0], pos['s'][1]-0.3, f'work={work["s"]}', color='blue', fontsize=20, ha='center', va='top',
           bbox=dict(facecolor='white', alpha=0.8, edgecolor='blue', boxstyle='round,pad=0.2'))
    
    # 7.5 显示边的流量
    labels = {}
    for u, v in G.edges:
        if u == 's' and v in ['a', 'b', 'c', 'd']:
            f = flow[(u, v)]
            labels[(u, v)] = f"{f}/{G[u][v]['capacity']}"
    nx.draw_networkx_edge_labels(G, pos, edge_labels=labels, ax=ax, font_size=16)
    
    # 7.6 高亮当前边
    if current_edge:
        nx.draw_networkx_edges(G, pos, edgelist=[current_edge], edge_color='r', width=3, ax=ax, arrowsize=20)
    
    # 7.7 显示提示信息
    if mode == 'full':
        ax.text(0.5, 0.5, '该边已满，下次DFS从work+1开始', transform=ax.transAxes, ha='center', va='center', fontsize=24,
                bbox=dict(facecolor='white', alpha=0.9, edgecolor='red', boxstyle='round,pad=0.3'), color='red', zorder=10)
    elif mode == 'restart':
        ax.text(0.5, 0.5, '重新开始DFS，从work=2开始', transform=ax.transAxes, ha='center', va='center', fontsize=24,
                bbox=dict(facecolor='white', alpha=0.9, edgecolor='blue', boxstyle='round,pad=0.3'), color='blue', zorder=10)
    elif mode == 'backtrack':
        ax.text(0.5, 0.5, '从其他节点回溯到s', transform=ax.transAxes, ha='center', va='center', fontsize=24,
                bbox=dict(facecolor='white', alpha=0.9, edgecolor='green', boxstyle='round,pad=0.3'), color='green', zorder=10)
    
    # 7.8 右下角提示
    ax.text(0.98, 0.9, info, transform=ax.transAxes, ha='right', va='top', fontsize=18,
            bbox=dict(facecolor='white', alpha=0.8, edgecolor='gray'))
    ax.axis('off')

ani = animation.FuncAnimation(fig, update, frames=len(display_steps), interval=800, repeat_delay=2000)

# 保存为GIF
ani.save('arc_opt.gif', writer='pillow')

print("动画已保存为 arc_opt.gif")
