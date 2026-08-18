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

# 1. 构建二分图
G = nx.Graph()

# 添加学生节点
students = ['S1', 'S2', 'S3', 'S4']
# 添加导师节点
teachers = ['T1', 'T2', 'T3', 'T4']

# 添加节点
for node in students + teachers:
    G.add_node(node)

# 添加边（学生-导师的申请关系）
edges = [
    ('S1', 'T1'), ('S1', 'T2'),
    ('S2', 'T2'), ('S2', 'T3'),
    ('S3', 'T1'), ('S3', 'T3'),
    ('S4', 'T2'), ('S4', 'T4')
]
G.add_edges_from(edges)

# 2. 设置节点位置（统一使用flow_pos，包括源点和汇点的位置）
flow_pos = {
    # 学生节点（左侧）
    'S1': (0, 3), 'S2': (0, 2), 'S3': (0, 1), 'S4': (0, 0),
    # 导师节点（右侧）
    'T1': (2, 3), 'T2': (2, 2), 'T3': (2, 1), 'T4': (2, 0),
    # 源点和汇点（虽然不显示，但位置已预留）
    's': (-1, 1.5), 't': (3, 1.5)
}

# 3. 创建图形
fig, ax = plt.subplots(figsize=(10, 6))
fig.subplots_adjust(left=0.1, right=0.9, top=0.9, bottom=0.1)

# 4. 动画步骤收集
steps = []

# 5. 第一步：显示原始二分图（使用完整布局，但不显示源点和汇点）
steps.append(('bipartite', '原始二分图'))

# 6. 第二步：显示源点和汇点（其他点位置完全不变）
steps.append(('show_st', '添加源点和汇点'))

# 7. 第三步：添加所有边
G_flow = nx.DiGraph()
G_flow.add_nodes_from(students + teachers)
G_flow.add_edges_from(edges)
G_flow.add_node('s')
G_flow.add_node('t')

# 添加源点到学生的边
for student in students:
    G_flow.add_edge('s', student, capacity=1)
# 添加导师到汇点的边
for teacher in teachers:
    G_flow.add_edge(teacher, 't', capacity=1)
# 将无向边转换为有向边
for u, v in edges:
    G_flow.add_edge(u, v, capacity=1)

steps.append(('add_edges', '添加所有边并标注容量'))

# 8. 动画帧重复策略
STEP_REPEAT = 1
display_steps = []
for s in steps:
    display_steps.extend([s]*STEP_REPEAT)

# 9. 更新函数
def update(step):
    ax.clear()
    mode, info = display_steps[step]
    
    if mode == 'bipartite':
        # 绘制原始二分图（使用完整布局，但不显示源点和汇点）
        pos = {k: v for k, v in flow_pos.items() if k not in ['s', 't']}
        nx.draw_networkx_nodes(G, pos, nodelist=students, node_color='lightblue', node_size=1000, ax=ax)
        nx.draw_networkx_nodes(G, pos, nodelist=teachers, node_color='lightgreen', node_size=1000, ax=ax)
        nx.draw_networkx_edges(G, pos, edge_color='gray', width=2, ax=ax)
        nx.draw_networkx_labels(G, pos, font_size=20, ax=ax)
    elif mode == 'show_st':
        # 保持原图不变，只显示源点和汇点
        nx.draw_networkx_nodes(G, flow_pos, nodelist=students, node_color='lightblue', node_size=1000, ax=ax)
        nx.draw_networkx_nodes(G, flow_pos, nodelist=teachers, node_color='lightgreen', node_size=1000, ax=ax)
        nx.draw_networkx_edges(G, flow_pos, edge_color='gray', width=2, ax=ax)
        nx.draw_networkx_labels(G, flow_pos, font_size=20, ax=ax)
        # 添加源点和汇点
        nx.draw_networkx_nodes(G_flow, flow_pos, nodelist=['s'], node_color='red', node_size=1000, ax=ax)
        nx.draw_networkx_nodes(G_flow, flow_pos, nodelist=['t'], node_color='red', node_size=1000, ax=ax)
        nx.draw_networkx_labels(G_flow, flow_pos, labels={'s': 's', 't': 't'}, font_size=20, ax=ax)
    else:  # add_edges
        # 绘制所有节点
        nx.draw_networkx_nodes(G_flow, flow_pos, nodelist=['s'], node_color='red', node_size=1000, ax=ax)
        nx.draw_networkx_nodes(G_flow, flow_pos, nodelist=students, node_color='lightblue', node_size=1000, ax=ax)
        nx.draw_networkx_nodes(G_flow, flow_pos, nodelist=teachers, node_color='lightgreen', node_size=1000, ax=ax)
        nx.draw_networkx_nodes(G_flow, flow_pos, nodelist=['t'], node_color='red', node_size=1000, ax=ax)
        
        # 绘制所有边
        nx.draw_networkx_edges(G_flow, flow_pos, edge_color='gray', width=2, ax=ax)
        
        # 绘制标签
        nx.draw_networkx_labels(G_flow, flow_pos, font_size=20, ax=ax)
        
        # 只标注源点到学生和导师到汇点的容量
        edge_labels = {}
        for student in students:
            edge_labels[('s', student)] = '1'
        for teacher in teachers:
            edge_labels[(teacher, 't')] = '1'
        nx.draw_networkx_edge_labels(G_flow, flow_pos, edge_labels=edge_labels, font_size=16, ax=ax)
    
    # 显示提示信息
    ax.text(0.5, 0.95, info, transform=ax.transAxes, ha='center', va='top', fontsize=24,
            bbox=dict(facecolor='white', alpha=0.8, edgecolor='gray', boxstyle='round,pad=0.3'))
    
    # 设置坐标轴范围，确保视图稳定
    ax.set_xlim(-2, 4)
    ax.set_ylim(-1, 4)
    ax.axis('off')

# 10. 创建动画
ani = animation.FuncAnimation(fig, update, frames=len(display_steps), interval=1000, repeat_delay=1000)

# 11. 保存为GIF
ani.save('bigraph_flow.gif', writer='pillow')

print("动画已保存为 bigraph_flow.gif")