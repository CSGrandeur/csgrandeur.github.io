import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from matplotlib import rcParams

# 设置matplotlib支持中文和大字号
rcParams['font.sans-serif'] = ['SimHei', 'Arial Unicode MS', 'Microsoft YaHei']
rcParams['axes.unicode_minus'] = False
rcParams['font.size'] = 20  # 全局字号

def kahn_topo_sort(adj, n):
    in_deg = [0] * n
    for u in range(n):
        for v in adj[u]:
            in_deg[v] += 1
    queue = [i for i in range(n) if in_deg[i] == 0]
    topo = []
    steps = []  # 记录每一步的状态
    removed_edges = set()
    while queue:
        cur = queue.pop(0)
        topo.append(cur)
        steps.append((topo[:], in_deg[:], removed_edges.copy(), queue[:]))
        for v in adj[cur]:
            removed_edges.add((cur, v))
            in_deg[v] -= 1
            if in_deg[v] == 0:
                queue.append(v)
    steps.append((topo[:], in_deg[:], removed_edges.copy(), queue[:]))
    return steps, topo

def create_animation():
    # 构造一个有向无环图
    n = 6
    # 邻接表
    adj = [
        [1, 2],    # 0 -> 1, 2
        [3],       # 1 -> 3
        [3, 4],    # 2 -> 3, 4
        [5],       # 3 -> 5
        [5],       # 4 -> 5
        []         # 5
    ]
    edges = []
    for u in range(n):
        for v in adj[u]:
            edges.append((u, v))
    # 原始节点布局
    base_positions = np.array([
        [0.1, 1.0],   # 0
        [0.6, 1.0],   # 1
        [0.1, 0.6],   # 2
        [0.6, 0.6],   # 3
        [0.1, 0.2],   # 4
        [0.6, 0.2],   # 5
    ])
    # 排序带右侧位置
    sorted_x = 1.05
    sorted_y_start = 1.0
    sorted_y_gap = -0.18

    steps, topo = kahn_topo_sort(adj, n)

    plt.style.use('dark_background')
    fig, ax = plt.subplots(figsize=(9, 6))

    def get_positions(topo_now):
        # 返回每个节点的当前坐标
        pos = base_positions.copy()
        for idx, node in enumerate(topo_now):
            pos[node, 0] = sorted_x
            pos[node, 1] = sorted_y_start + idx * sorted_y_gap
        return pos

    def update(frame):
        ax.clear()
        topo_now, in_deg, removed_edges, queue = steps[frame]
        node_positions = get_positions(topo_now)
        # 绘制所有边（已删除的变灰色）
        for u, v in edges:
            x = [node_positions[u][0], node_positions[v][0]]
            y = [node_positions[u][1], node_positions[v][1]]
            if (u, v) in removed_edges:
                ax.arrow(x[0], y[0], x[1]-x[0], y[1]-y[0],
                         head_width=0.03, head_length=0.05, fc='gray', ec='gray',
                         length_includes_head=True, linewidth=4, alpha=0.3, zorder=1)
            else:
                ax.arrow(x[0], y[0], x[1]-x[0], y[1]-y[0],
                         head_width=0.03, head_length=0.05, fc='lightgray', ec='lightgray',
                         length_includes_head=True, linewidth=4, zorder=1)
        # 高亮已排序节点（右侧）
        for idx, i in enumerate(topo_now):
            ax.scatter(node_positions[i,0], node_positions[i,1], s=1100, c='#FFD700', edgecolors='black', zorder=5)
        # 高亮当前入度为0且未排序的节点（队列）
        for i in queue:
            if i not in topo_now:
                ax.scatter(node_positions[i,0], node_positions[i,1], s=1100, c='cyan', edgecolors='black', zorder=6)
        # 绘制所有节点
        ax.scatter(node_positions[:, 0], node_positions[:, 1], s=900, c='lightgray', edgecolors='black', zorder=4)
        # 节点编号
        for i, (x0, y0) in enumerate(node_positions):
            ax.text(x0, y0, str(i), color='black', fontsize=32, ha='center', va='center', fontweight='bold', zorder=8)
        # 显示每个节点的入度
        for i in range(n):
            ax.text(node_positions[i,0], node_positions[i,1]+0.09, f'in={in_deg[i]}', color='cyan', fontsize=18, ha='center', va='center', zorder=7)
        # 排序带提示
        ax.text(sorted_x+0.08, sorted_y_start-0.05, '排序带', color='#FFD700', fontsize=22, ha='left', va='center', fontweight='bold', zorder=10)
        ax.set_xlim(-0.1, 1.3)
        ax.set_ylim(-0.15, 1.1)
        ax.set_aspect('equal')
        ax.axis('off')
        if frame < len(steps)-1:
            ax.set_title(f'拓扑排序 - 步骤 {frame+1}/{len(steps)-1}', color='white', fontsize=28, fontweight='bold')
        else:
            ax.set_title(f'拓扑排序 - 结果: {"→".join(map(str, topo))}', color='white', fontsize=28, fontweight='bold')

    anim = FuncAnimation(fig, update, frames=len(steps), interval=1200, repeat=False)
    anim.save('topo.gif', writer='pillow', fps=1, dpi=120)
    plt.close()

if __name__ == "__main__":
    create_animation()
