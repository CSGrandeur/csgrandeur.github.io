import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from matplotlib import rcParams

# 设置matplotlib支持中文和大字号
rcParams['font.sans-serif'] = ['SimHei', 'Arial Unicode MS', 'Microsoft YaHei']
rcParams['axes.unicode_minus'] = False
rcParams['font.size'] = 20  # 全局字号

def prim_algorithm(graph, start_node=0):
    n = len(graph)
    visited = [False] * n
    parent = [-1] * n
    key = [float('inf')] * n
    key[start_node] = 0
    mst_edges = []
    
    for _ in range(n):
        min_key = float('inf')
        u = -1
        for v in range(n):
            if not visited[v] and key[v] < min_key:
                min_key = key[v]
                u = v
        visited[u] = True
        if parent[u] != -1:
            mst_edges.append((parent[u], u))
        for v in range(n):
            if graph[u][v] > 0 and not visited[v] and graph[u][v] < key[v]:
                parent[v] = u
                key[v] = graph[u][v]
    return mst_edges

def create_animation():
    # 固定图结构和权重，节点数7
    n = 7
    graph = np.zeros((n, n), dtype=int)
    edges = [
        (0, 1, 28),
        (0, 5, 10),
        (1, 2, 16),
        (1, 6, 14),
        (2, 3, 12),
        (3, 4, 22),
        (3, 6, 11),
        (4, 5, 25),
        (4, 6, 12),
    ]
    for u, v, w in edges:
        graph[u][v] = w
        graph[v][u] = w

    # 手动指定节点坐标，尽量还原图片布局
    node_positions = np.array([
        [0.1, 1.0],   # 0
        [1.0, 1.0],   # 1
        [1.3, 0.5],   # 2
        [1.0, 0.0],   # 3
        [0.1, 0.0],   # 4
        [-0.2, 0.5],  # 5
        [0.6, 0.6],   # 6
    ])

    # 计算MST
    mst_edges = prim_algorithm(graph)

    plt.style.use('dark_background')
    fig, ax = plt.subplots(figsize=(7, 6))

    def update(frame):
        ax.clear()
        # 绘制所有边
        for u, v, w in edges:
            x = [node_positions[u][0], node_positions[v][0]]
            y = [node_positions[u][1], node_positions[v][1]]
            ax.plot(x, y, color='lightgray', linewidth=5, zorder=1)
            # 边权重标签
            mid_x = (x[0] + x[1]) / 2
            mid_y = (y[0] + y[1]) / 2
            ax.text(mid_x, mid_y, str(w), color='white', fontsize=24, ha='center', va='center', zorder=3, fontweight='bold')
        # 绘制MST边
        if frame < len(mst_edges):
            for i in range(frame + 1):
                u, v = mst_edges[i]
                x = [node_positions[u][0], node_positions[v][0]]
                y = [node_positions[u][1], node_positions[v][1]]
                ax.plot(x, y, color='red', linewidth=7, zorder=2)
        # 绘制节点
        ax.scatter(node_positions[:, 0], node_positions[:, 1], s=900, c='lightgray', edgecolors='black', zorder=4)
        # 节点编号
        for i, (x, y) in enumerate(node_positions):
            ax.text(x, y, str(i), color='black', fontsize=32, ha='center', va='center', fontweight='bold', zorder=5)
        ax.set_xlim(-0.4, 1.5)
        ax.set_ylim(-0.2, 1.2)
        ax.set_aspect('equal')
        ax.axis('off')
        ax.set_title(f'Prim算法构建最小生成树 - 步骤 {frame+1}/{len(mst_edges)}', color='white', fontsize=28, fontweight='bold')

    anim = FuncAnimation(fig, update, frames=len(mst_edges), interval=1200, repeat=False)
    anim.save('prim.gif', writer='pillow', fps=1, dpi=120)
    plt.close()

if __name__ == "__main__":
    create_animation()
