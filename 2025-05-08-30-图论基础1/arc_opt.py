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

# 构建简单的局部网络
edges = [
    ('prev', 's', 0),  # 添加前驱节点
    ('s', 'a', 5), ('s', 'b', 3), ('s', 'c', 4), ('s', 'd', 2),
    ('a', 'next1', 0), ('b', 'next2', 0), ('c', 'next3', 0), ('d', 'next4', 0)  # 添加后继节点
]
G = nx.DiGraph()
for u, v, c in edges:
    G.add_edge(u, v, capacity=c)

# 节点布局
pos = {
    'prev': (-1, 0),  # 前驱节点
    's': (0, 0),
    'a': (1, 1.5), 'b': (1, 0.5), 'c': (1, -0.5), 'd': (1, -1.5),
    'next1': (2, 1.5), 'next2': (2, 0.5), 'next3': (2, -0.5), 'next4': (2, -1.5)  # 后继节点
}

fig, ax = plt.subplots(figsize=(10, 6))
fig.subplots_adjust(left=0.1, right=0.9, top=0.9, bottom=0.1)

# 动画步骤收集
steps = []  # (flow, work, current_edge, mode, info)

# 模拟DFS过程
flow = {('s', 'a'): 0, ('s', 'b'): 0, ('s', 'c'): 0, ('s', 'd'): 0}
work = {'s': 0}
current_edge = None

# 第一次DFS
steps.append((copy.deepcopy(flow), dict(work), None, 'start', '开始DFS'))
for i in range(4):
    work['s'] = i
    current_edge = ('s', list(G.successors('s'))[i])
    steps.append((copy.deepcopy(flow), dict(work), current_edge, 'try', f'尝试边 s->{current_edge[1]}'))
    if i == 1:  # 假设第二条边被推满
        flow[current_edge] = G[current_edge[0]][current_edge[1]]['capacity']
        steps.append((copy.deepcopy(flow), dict(work), current_edge, 'full', f'边 s->{current_edge[1]} 已满'))

# 第二次DFS（从work=2开始）
steps.append((copy.deepcopy(flow), dict(work), None, 'restart', '重新开始DFS'))
for i in range(2, 4):
    work['s'] = i
    current_edge = ('s', list(G.successors('s'))[i])
    steps.append((copy.deepcopy(flow), dict(work), current_edge, 'try', f'从work={i}开始尝试边 s->{current_edge[1]}'))

# 动画帧重复策略
STEP_REPEAT = 2
display_steps = []
for s in steps:
    display_steps.extend([s]*STEP_REPEAT)

def update(step):
    ax.clear()
    flow, work, current_edge, mode, info = display_steps[step]
    
    # 画图
    # 先画抽象节点（灰色）
    nx.draw_networkx_nodes(G, pos, nodelist=['prev', 'next1', 'next2', 'next3', 'next4'], 
                          node_color='lightgray', node_size=800, ax=ax)
    nx.draw_networkx_labels(G, pos, labels={'prev': '...', 'next1': '...', 'next2': '...', 'next3': '...', 'next4': '...'}, 
                           font_size=20, ax=ax)
    
    # 画主要节点
    nx.draw_networkx_nodes(G, pos, nodelist=['s', 'a', 'b', 'c', 'd'], 
                          node_color='whitesmoke', node_size=1000, ax=ax)
    nx.draw_networkx_labels(G, pos, labels={'s': 's', 'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd'}, 
                           font_size=26, ax=ax)
    
    # 画边
    nx.draw_networkx_edges(G, pos, edge_color='lightgray', width=1, arrowsize=20, ax=ax)
    
    # 显示work值
    ax.text(pos['s'][0], pos['s'][1]-0.3, f'work={work["s"]}', color='blue', fontsize=20, ha='center', va='top',
           bbox=dict(facecolor='white', alpha=0.8, edgecolor='blue', boxstyle='round,pad=0.2'))
    
    # 显示边的流量（只显示主要边的流量）
    labels = {}
    for u, v in G.edges:
        if u == 's' and v in ['a', 'b', 'c', 'd']:
            f = flow[(u, v)]
            labels[(u, v)] = f"{f}/{G[u][v]['capacity']}"
    nx.draw_networkx_edge_labels(G, pos, edge_labels=labels, ax=ax, font_size=16)
    
    # 高亮当前边
    if current_edge:
        nx.draw_networkx_edges(G, pos, edgelist=[current_edge], edge_color='r', width=3, ax=ax, arrowsize=20)
    
    # 显示提示信息
    if mode == 'full':
        ax.text(0.5, 0.5, '该边已满，下次DFS从work+1开始', transform=ax.transAxes, ha='center', va='center', fontsize=24,
                bbox=dict(facecolor='white', alpha=0.9, edgecolor='red', boxstyle='round,pad=0.3'), color='red', zorder=10)
    elif mode == 'restart':
        ax.text(0.5, 0.5, '重新开始DFS，从work=2开始', transform=ax.transAxes, ha='center', va='center', fontsize=24,
                bbox=dict(facecolor='white', alpha=0.9, edgecolor='blue', boxstyle='round,pad=0.3'), color='blue', zorder=10)
    
    # 右下角提示
    ax.text(0.2, 0.9, info, transform=ax.transAxes, ha='right', va='top', fontsize=18,
            bbox=dict(facecolor='white', alpha=0.8, edgecolor='gray'))
    ax.axis('off')

ani = animation.FuncAnimation(fig, update, frames=len(display_steps), interval=800, repeat_delay=2000)

# 保存为GIF
ani.save('arc_opt.gif', writer='pillow')

print("动画已保存为 arc_opt.gif")
