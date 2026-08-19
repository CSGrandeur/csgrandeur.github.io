import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Polygon
import matplotlib.patches as patches

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 定义点集
points = np.array([
    [1, 1],   # 最左下角的点（起始点）
    [2, 3],   # 点2
    [3, 2],   # 点3
    [4, 4],   # 点4
    [5, 1],   # 点5
    [6, 3],   # 点6
    [7, 2],   # 点7
    [4, 5],   # 点8
    [2, 5],   # 点9
    [1, 4],   # 点10
    [3, 6],   # 点11
    [6, 5],   # 点12
])

# 计算凸包（Graham扫描法）
def cross_product(o, a, b):
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])

def graham_scan_with_steps(points):
    if len(points) < 3:
        return [points], [points]
    
    # 找到最左下角的点
    start = min(points, key=lambda p: (p[1], p[0]))
    
    # 按极角排序其他点
    def polar_angle(p):
        return np.arctan2(p[1] - start[1], p[0] - start[0])
    
    sorted_points = sorted([p for p in points if not np.array_equal(p, start)], key=polar_angle)
    sorted_points.insert(0, start)
    
    # Graham扫描，记录每一步的栈状态
    hull_states = []
    stack_states = []
    
    hull = [sorted_points[0], sorted_points[1]]
    hull_states.append(hull.copy())
    stack_states.append(hull.copy())
    
    for i in range(2, len(sorted_points)):
        current_point = sorted_points[i]
        
        # 弹出破坏凸性的点
        while len(hull) > 1 and cross_product(hull[-2], hull[-1], current_point) <= 0:
            hull.pop()
            hull_states.append(hull.copy())
            stack_states.append(hull.copy())
        
        # 加入新点
        hull.append(current_point)
        hull_states.append(hull.copy())
        stack_states.append(hull.copy())
    
    return hull_states, stack_states

# 计算所有步骤
hull_states, stack_states = graham_scan_with_steps(points)

# 选择几个关键步骤进行展示
key_steps = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
key_steps = [i for i in key_steps if i < len(hull_states)]

# 创建子图
fig, axes = plt.subplots(4, 4, figsize=(20, 16))
axes = axes.flatten()

for idx, step in enumerate(key_steps):
    if idx >= 16:  # 最多显示16个步骤
        break
        
    ax = axes[idx]
    current_hull = np.array(hull_states[step])
    current_stack = np.array(stack_states[step])
    
    # 绘制所有点
    ax.scatter(points[:, 0], points[:, 1], c='blue', s=80, zorder=5, alpha=0.6)
    
    # 为每个点添加标签
    for i, point in enumerate(points):
        ax.annotate(f'P{i+1}', (point[0], point[1]), xytext=(3, 3), 
                   textcoords='offset points', fontsize=8, fontweight='bold')
    
    # 标记起始点
    ax.scatter(points[0, 0], points[0, 1], c='red', s=120, zorder=6)
    
    # 绘制当前凸包
    if len(current_hull) >= 2:
        ax.plot(current_hull[:, 0], current_hull[:, 1], 'g-', linewidth=2, zorder=2)
        if len(current_hull) >= 3:
            hull_polygon = Polygon(current_hull, facecolor='lightgreen', alpha=0.3, 
                                 edgecolor='green', linewidth=2)
            ax.add_patch(hull_polygon)
    
    # 绘制栈中的点
    if len(current_stack) > 0:
        ax.scatter(current_stack[:, 0], current_stack[:, 1], c='red', s=120, zorder=6)
        if len(current_stack) >= 2:
            ax.plot(current_stack[:, 0], current_stack[:, 1], 'r-', linewidth=2, zorder=2)
    
    # 设置坐标轴
    ax.set_xlim(0, 8)
    ax.set_ylim(0, 7)
    ax.set_aspect('equal')
    ax.grid(True, alpha=0.3)
    
    # 获取栈中点的标签
    stack_labels = []
    for sp in current_stack:
        for i, p in enumerate(points):
            if np.array_equal(p, sp):
                stack_labels.append(f"P{i+1}")
                break
    
    ax.set_title(f'步骤 {step + 1}\n栈: {stack_labels}\n凸包顶点: {len(current_hull)}', 
                fontsize=10, fontweight='bold')

# 隐藏多余的子图
for idx in range(len(key_steps), 16):
    axes[idx].set_visible(False)

plt.tight_layout()
plt.savefig('convex_hull_steps.svg', format='svg', bbox_inches='tight', dpi=300)
print("步骤图已保存为 convex_hull_steps.svg")

# 创建一个简化的动画版本
fig2, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 8))

# 左图：最终凸包
ax1.set_xlim(0, 8)
ax1.set_ylim(0, 7)
ax1.set_aspect('equal')
ax1.grid(True, alpha=0.3)
ax1.set_title('最终凸包', fontsize=14, fontweight='bold')

# 绘制所有点
ax1.scatter(points[:, 0], points[:, 1], c='blue', s=100, zorder=5, alpha=0.6)

# 为每个点添加标签
for i, point in enumerate(points):
    ax1.annotate(f'P{i+1}', (point[0], point[1]), xytext=(5, 5), 
                textcoords='offset points', fontsize=10, fontweight='bold')

# 标记起始点
ax1.scatter(points[0, 0], points[0, 1], c='red', s=150, zorder=6, label='起始点')

# 绘制最终凸包
final_hull = np.array(hull_states[-1])
if len(final_hull) >= 3:
    hull_polygon = Polygon(final_hull, facecolor='lightgreen', alpha=0.3, 
                          edgecolor='green', linewidth=3)
    ax1.add_patch(hull_polygon)
    ax1.plot(final_hull[:, 0], final_hull[:, 1], 'g-', linewidth=3, zorder=2)

# 标记凸包顶点
for i, point in enumerate(final_hull):
    ax1.scatter(point[0], point[1], c='green', s=120, zorder=6)
    ax1.annotate(f'H{i+1}', (point[0], point[1]), xytext=(5, 5), 
                textcoords='offset points', fontsize=12, fontweight='bold', color='green')

ax1.legend()

# 右图：栈的变化过程
ax2.set_xlim(0, 8)
ax2.set_ylim(0, 7)
ax2.set_aspect('equal')
ax2.grid(True, alpha=0.3)
ax2.set_title('栈变化过程', fontsize=14, fontweight='bold')

# 绘制所有点
ax2.scatter(points[:, 0], points[:, 1], c='blue', s=100, zorder=5, alpha=0.6)

# 为每个点添加标签
for i, point in enumerate(points):
    ax2.annotate(f'P{i+1}', (point[0], point[1]), xytext=(5, 5), 
                textcoords='offset points', fontsize=10, fontweight='bold')

# 标记起始点
ax2.scatter(points[0, 0], points[0, 1], c='red', s=150, zorder=6, label='起始点')

# 绘制扫描顺序
start = points[0]
sorted_points = sorted([p for p in points if not np.array_equal(p, start)], 
                      key=lambda p: np.arctan2(p[1] - start[1], p[0] - start[0]))
sorted_points.insert(0, start)

# 绘制扫描顺序
for i in range(len(sorted_points) - 1):
    p1 = sorted_points[i]
    p2 = sorted_points[i + 1]
    ax2.annotate(f'→', ((p1[0] + p2[0])/2, (p1[1] + p2[1])/2), 
                fontsize=16, color='orange', weight='bold',
                bbox=dict(boxstyle="round,pad=0.2", facecolor="yellow", alpha=0.7))

# 添加说明文字
ax2.text(0.02, 0.98, 
         'Graham扫描法栈操作：\n'
         '• 初始栈：[P1, P2]\n'
         '• 加入P3：检查凸性，保持栈\n'
         '• 加入P4：检查凸性，保持栈\n'
         '• 加入P5：弹出P4，加入P5\n'
         '• 继续扫描直到所有点处理完', 
         transform=ax2.transAxes, fontsize=11, verticalalignment='top',
         bbox=dict(boxstyle="round,pad=0.5", facecolor="lightyellow", alpha=0.8))

ax2.legend()

plt.tight_layout()
plt.savefig('convex_hull_process.svg', format='svg', bbox_inches='tight', dpi=300)
print("过程图已保存为 convex_hull_process.svg")

plt.show() 