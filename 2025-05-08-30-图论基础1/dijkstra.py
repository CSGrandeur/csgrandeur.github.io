import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from matplotlib import rcParams

# 设置matplotlib支持中文和大字号
rcParams['font.sans-serif'] = ['SimHei', 'Arial Unicode MS', 'Microsoft YaHei']
rcParams['axes.unicode_minus'] = False
rcParams['font.size'] = 20  # 全局字号

def dijkstra_algorithm(graph, start, end):
    n = len(graph)
    dist = [float('inf')] * n
    prev = [-1] * n
    visited = [False] * n
    dist[start] = 0
    steps = []  # 记录每一步的状态
    while True:
        u = -1
        min_dist = float('inf')
        for i in range(n):
            if not visited[i] and dist[i] < min_dist:
                min_dist = dist[i]
                u = i
        if u == -1 or u == end:
            break
        visited[u] = True
        # 记录当前状态
        steps.append((dist[:], prev[:], visited[:]))
        for v in range(n):
            if graph[u][v] > 0 and not visited[v]:
                if dist[u] + graph[u][v] < dist[v]:
                    dist[v] = dist[u] + graph[u][v]
                    prev[v] = u
    # 最后一步也记录
    steps.append((dist[:], prev[:], visited[:]))
    # 回溯最短路径
    path = []
    cur = end
    while cur != -1:
        path.append(cur)
        cur = prev[cur]
    path = path[::-1]
    return steps, path

def create_animation():
    n = 7
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
    graph = np.zeros((n, n), dtype=int)
    for u, v, w in edges:
        graph[u][v] = w
        graph[v][u] = w
    node_positions = np.array([
        [0.1, 1.0],   # 0
        [1.0, 1.0],   # 1
        [1.3, 0.5],   # 2
        [1.0, 0.0],   # 3
        [0.1, 0.0],   # 4
        [-0.2, 0.5],  # 5
        [0.6, 0.6],   # 6
    ])
    start, end = 0, 3
    steps, path = dijkstra_algorithm(graph, start, end)

    plt.style.use('dark_background')
    fig, ax = plt.subplots(figsize=(7, 6))

    def update(frame):
        ax.clear()
        # 绘制所有边
        for u, v, w in edges:
            x = [node_positions[u][0], node_positions[v][0]]
            y = [node_positions[u][1], node_positions[v][1]]
            ax.plot(x, y, color='lightgray', linewidth=5, zorder=1)
            mid_x = (x[0] + x[1]) / 2
            mid_y = (y[0] + y[1]) / 2
            ax.text(mid_x, mid_y, str(w), color='white', fontsize=24, ha='center', va='center', zorder=3, fontweight='bold')
        # 当前帧状态
        if frame < len(steps):
            dist, prev, visited = steps[frame]
            # 高亮已确定最短路的节点
            for i in range(n):
                if visited[i]:
                    ax.scatter(node_positions[i,0], node_positions[i,1], s=1100, c='#FFD700', edgecolors='black', zorder=5)
            # 高亮已确定的边
            for i in range(n):
                if visited[i] and prev[i] != -1:
                    u, v = i, prev[i]
                    x = [node_positions[u][0], node_positions[v][0]]
                    y = [node_positions[u][1], node_positions[v][1]]
                    ax.plot(x, y, color='#FFD700', linewidth=8, zorder=4)
            # 显示每个节点的dist
            for i in range(n):
                ax.text(node_positions[i,0], node_positions[i,1]+0.09, f'd={dist[i] if dist[i]!=float("inf") else "∞"}', color='cyan', fontsize=18, ha='center', va='center', zorder=6)
        else:
            # 最后一帧高亮最短路径
            for i in range(1, len(path)):
                u, v = path[i-1], path[i]
                x = [node_positions[u][0], node_positions[v][0]]
                y = [node_positions[u][1], node_positions[v][1]]
                ax.plot(x, y, color='red', linewidth=10, zorder=6)
            for i in path:
                ax.scatter(node_positions[i,0], node_positions[i,1], s=1300, c='red', edgecolors='black', zorder=7)
        # 绘制所有节点
        ax.scatter(node_positions[:, 0], node_positions[:, 1], s=900, c='lightgray', edgecolors='black', zorder=4)
        # 节点编号
        for i, (x0, y0) in enumerate(node_positions):
            ax.text(x0, y0, str(i), color='black', fontsize=32, ha='center', va='center', fontweight='bold', zorder=8)
        ax.set_xlim(-0.4, 1.5)
        ax.set_ylim(-0.2, 1.2)
        ax.set_aspect('equal')
        ax.axis('off')
        if frame < len(steps):
            ax.set_title(f'Dijkstra最短路 - 步骤 {frame+1}/{len(steps)}', color='white', fontsize=28, fontweight='bold')
        else:
            ax.set_title(f'Dijkstra最短路 - 路径: {"→".join(map(str, path))}', color='white', fontsize=28, fontweight='bold')

    anim = FuncAnimation(fig, update, frames=len(steps)+1, interval=1200, repeat=False)
    anim.save('dijkstra.gif', writer='pillow', fps=1, dpi=120)
    plt.close()

if __name__ == "__main__":
    create_animation()
