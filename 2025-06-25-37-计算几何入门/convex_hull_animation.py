import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Polygon
import matplotlib.patches as patches
from matplotlib.animation import FuncAnimation
import matplotlib.patches as mpatches

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
        return [points], [points], [], []
    
    # 找到最左下角的点
    start = min(points, key=lambda p: (p[1], p[0]))
    
    # 按极角排序其他点
    def polar_angle(p):
        return np.arctan2(p[1] - start[1], p[0] - start[0])
    
    sorted_points = sorted([p for p in points if not np.array_equal(p, start)], key=polar_angle)
    sorted_points.insert(0, start)
    
    # Graham扫描，记录每一步的栈状态和检查信息
    hull_states = []
    stack_states = []
    check_info = []
    check_points = []  # 记录每次检查的三个点
    
    hull = [sorted_points[0], sorted_points[1]]
    hull_states.append(hull.copy())
    stack_states.append(hull.copy())
    check_info.append("初始栈：[P1, P2]")
    check_points.append([])  # 初始状态没有检查点
    
    for i in range(2, len(sorted_points)):
        current_point = sorted_points[i]
        
        # 弹出破坏凸性的点
        while len(hull) > 1 and cross_product(hull[-2], hull[-1], current_point) <= 0:
            # 记录检查信息
            p1_idx = next(idx for idx, p in enumerate(points) if np.array_equal(p, hull[-2]))
            p2_idx = next(idx for idx, p in enumerate(points) if np.array_equal(p, hull[-1]))
            current_idx = next(idx for idx, p in enumerate(points) if np.array_equal(p, current_point))
            cross_val = cross_product(hull[-2], hull[-1], current_point)
            
            check_info.append(f"检查：P{p1_idx+1}→P{p2_idx+1}→P{current_idx+1}\n叉积={cross_val:.1f}≤0，弹出P{p2_idx+1}")
            check_points.append([hull[-2], hull[-1], current_point])  # 记录检查的三个点
            
            hull.pop()
            hull_states.append(hull.copy())
            stack_states.append(hull.copy())
        
        # 加入新点
        current_idx = next(idx for idx, p in enumerate(points) if np.array_equal(p, current_point))
        if len(hull) > 1:
            p1_idx = next(idx for idx, p in enumerate(points) if np.array_equal(p, hull[-2]))
            p2_idx = next(idx for idx, p in enumerate(points) if np.array_equal(p, hull[-1]))
            cross_val = cross_product(hull[-2], hull[-1], current_point)
            check_info.append(f"检查：P{p1_idx+1}→P{p2_idx+1}→P{current_idx+1}\n叉积={cross_val:.1f}>0，加入P{current_idx+1}")
            check_points.append([hull[-2], hull[-1], current_point])  # 记录检查的三个点
        else:
            check_info.append(f"加入P{current_idx+1}")
            check_points.append([])  # 没有检查点
        
        hull.append(current_point)
        hull_states.append(hull.copy())
        stack_states.append(hull.copy())
    
    return hull_states, stack_states, check_info, check_points

# 计算所有步骤
hull_states, stack_states, check_info, check_points = graham_scan_with_steps(points)

# 创建图形
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(20, 12))

# 左图：凸包构建过程
ax1.set_xlim(0, 8)
ax1.set_ylim(0, 7)
ax1.set_aspect('equal')
ax1.grid(True, alpha=0.3)
ax1.set_title('Graham扫描法 - 凸包构建过程', fontsize=18, fontweight='bold')

# 右图：栈状态
ax2.set_xlim(0, 8)
ax2.set_ylim(0, 7)
ax2.set_aspect('equal')
ax2.grid(True, alpha=0.3)
ax2.set_title('栈状态变化与凸性检查', fontsize=18, fontweight='bold')

# 绘制所有点
ax1.scatter(points[:, 0], points[:, 1], c='blue', s=150, zorder=5, alpha=0.6)
ax2.scatter(points[:, 0], points[:, 1], c='blue', s=150, zorder=5, alpha=0.6)

# 为每个点添加标签
for i, point in enumerate(points):
    ax1.annotate(f'P{i+1}', (point[0], point[1]), xytext=(8, 8), 
                textcoords='offset points', fontsize=14, fontweight='bold')
    ax2.annotate(f'P{i+1}', (point[0], point[1]), xytext=(8, 8), 
                textcoords='offset points', fontsize=14, fontweight='bold')

# 标记起始点
ax1.scatter(points[0, 0], points[0, 1], c='red', s=200, zorder=6, label='起始点')
ax2.scatter(points[0, 0], points[0, 1], c='red', s=200, zorder=6, label='起始点')

# 初始化动画元素
hull_line, = ax1.plot([], [], 'g-', linewidth=4, zorder=2)
hull_polygon = ax1.add_patch(plt.Polygon([[0, 0]], facecolor='lightgreen', alpha=0.3, edgecolor='green', linewidth=3))
stack_scatter = ax2.scatter([], [], c='red', s=200, zorder=6)
stack_line, = ax2.plot([], [], 'r-', linewidth=4, zorder=2)

# 添加检查点的特效显示
check_scatter = ax2.scatter([], [], c='yellow', s=300, zorder=7, alpha=0.8, edgecolors='orange', linewidth=3)
check_line, = ax2.plot([], [], 'orange', linewidth=5, zorder=3, alpha=0.8)

# 添加文本显示当前步骤
step_text = ax1.text(0.02, 0.98, '', transform=ax1.transAxes, fontsize=16, 
                    verticalalignment='top', bbox=dict(boxstyle="round,pad=0.5", facecolor="yellow", alpha=0.8))
stack_text = ax2.text(0.02, 0.98, '', transform=ax2.transAxes, fontsize=16, 
                     verticalalignment='top', bbox=dict(boxstyle="round,pad=0.5", facecolor="yellow", alpha=0.8))

# 添加检查信息文本
check_text = ax2.text(0.02, 0.7, '', transform=ax2.transAxes, fontsize=14, 
                     verticalalignment='top', bbox=dict(boxstyle="round,pad=0.5", facecolor="lightblue", alpha=0.8))

def init():
    hull_line.set_data([], [])
    hull_polygon.set_xy([[0, 0]])  # 设置一个默认点
    stack_scatter.set_offsets(np.empty((0, 2)))
    stack_line.set_data([], [])
    check_scatter.set_offsets(np.empty((0, 2)))
    check_line.set_data([], [])
    step_text.set_text('')
    stack_text.set_text('')
    check_text.set_text('')
    return hull_line, hull_polygon, stack_scatter, stack_line, check_scatter, check_line, step_text, stack_text, check_text

def animate(frame):
    if frame < len(hull_states):
        current_hull = np.array(hull_states[frame])
        current_stack = np.array(stack_states[frame])
        current_info = check_info[frame] if frame < len(check_info) else ""
        current_check_points = check_points[frame] if frame < len(check_points) else []
        
        # 更新左图：凸包
        if len(current_hull) >= 2:
            hull_line.set_data(current_hull[:, 0], current_hull[:, 1])
            if len(current_hull) >= 3:
                hull_polygon.set_xy(current_hull)
            else:
                hull_polygon.set_xy([[0, 0]])  # 设置默认点
        else:
            hull_line.set_data([], [])
            hull_polygon.set_xy([[0, 0]])  # 设置默认点
        
        # 更新右图：栈
        if len(current_stack) > 0:
            stack_scatter.set_offsets(current_stack)
            if len(current_stack) >= 2:
                stack_line.set_data(current_stack[:, 0], current_stack[:, 1])
            else:
                stack_line.set_data([], [])
        else:
            stack_scatter.set_offsets(np.empty((0, 2)))
            stack_line.set_data([], [])
        
        # 更新检查点特效
        if len(current_check_points) == 3:
            check_points_array = np.array(current_check_points)
            check_scatter.set_offsets(check_points_array)
            check_line.set_data(check_points_array[:, 0], check_points_array[:, 1])
        else:
            check_scatter.set_offsets(np.empty((0, 2)))
            check_line.set_data([], [])
        
        # 更新文本
        step_text.set_text(f'步骤 {frame + 1}/{len(hull_states)}\n凸包顶点数: {len(current_hull)}')
        
        # 获取栈中点的标签
        stack_labels = []
        for sp in current_stack:
            for i, p in enumerate(points):
                if np.array_equal(p, sp):
                    stack_labels.append(f"P{i+1}")
                    break
        
        # 显示栈状态
        stack_text.set_text(f'栈大小: {len(current_stack)}\n栈内容: {stack_labels}')
        
        # 显示检查信息
        check_text.set_text(current_info)
    
    return hull_line, hull_polygon, stack_scatter, stack_line, check_scatter, check_line, step_text, stack_text, check_text

# 创建动画
anim = FuncAnimation(fig, animate, init_func=init, frames=len(hull_states), 
                    interval=1000, blit=True, repeat=True)

# 添加图例
ax1.legend(loc='upper right', fontsize=14)
ax2.legend(loc='upper right', fontsize=14)

plt.tight_layout()

# 保存为GIF
print("正在生成GIF动画...")
try:
    anim.save('convex_hull_animation.gif', writer='pillow', fps=1, dpi=150)
    print("GIF动画已保存为 convex_hull_animation.gif")
except Exception as e:
    print(f"保存GIF时出错: {e}")
    print("尝试保存为MP4格式...")
    try:
        anim.save('convex_hull_animation.mp4', writer='ffmpeg', fps=1)
        print("MP4动画已保存为 convex_hull_animation.mp4")
    except Exception as e2:
        print(f"保存MP4时也出错: {e2}")

# # 显示动画
# plt.show() 