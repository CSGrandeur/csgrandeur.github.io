import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Polygon, Circle
import matplotlib.patches as patches

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 创建图形，使用GridSpec来分割左右两部分
fig = plt.figure(figsize=(16, 8))
gs = fig.add_gridspec(1, 2, width_ratios=[3, 2])

# 左图：多边形与圆
ax_left = fig.add_subplot(gs[0])
ax_left.set_xlim(-1, 6)
ax_left.set_ylim(-1, 6)
ax_left.set_aspect('equal')
ax_left.grid(True, alpha=0.3)

# 定义多边形顶点（简单多边形）
polygon_points = np.array([
    [1, 1],   # 左下
    [3, 0.5], # 下中
    [4, 2],   # 右下
    [3.5, 4], # 右上
    [2, 5],   # 上中
    [0.5, 3]  # 左上
])

# 定义圆心和半径
circle_center = np.array([2.5, 2.5])
circle_radius = 1.5

# 绘制多边形
polygon = Polygon(polygon_points, facecolor='lightblue', alpha=0.6, edgecolor='blue', linewidth=2)
ax_left.add_patch(polygon)

# 绘制圆
circle = Circle(circle_center, circle_radius, facecolor='none', edgecolor='red', linewidth=2, linestyle='--')
ax_left.add_patch(circle)

# 标记圆心
ax_left.plot(circle_center[0], circle_center[1], 'ro', markersize=8, label='圆心')

# 添加一些测试点
test_points = [
    [2, 2],    # 在圆内，在多边形内
    [3.5, 2.5], # 在圆内，在多边形外
    [1.5, 1.5], # 在圆外，在多边形内
    [4.5, 3.5], # 在圆外，在多边形外
]

point_colors = ['green', 'orange', 'purple', 'brown']
point_labels = ['圆内+多边形内', '圆内+多边形外', '圆外+多边形内', '圆外+多边形外']

for i, (point, color, label) in enumerate(zip(test_points, point_colors, point_labels)):
    ax_left.plot(point[0], point[1], 'o', color=color, markersize=8, label=label)
    ax_left.annotate(f'P{i+1}', (point[0], point[1]), xytext=(5, 5), textcoords='offset points', fontsize=12)

# 标记多边形顶点
for i, point in enumerate(polygon_points):
    ax_left.plot(point[0], point[1], 'ko', markersize=6)
    ax_left.annotate(f'V{i+1}', (point[0], point[1]), xytext=(3, 3), textcoords='offset points', fontsize=10)

# 绘制线段与圆的关系示例
# 选择一条边来展示线段与圆相交
edge_start = polygon_points[1]  # V2
edge_end = polygon_points[2]    # V3

# 计算线段到圆心的距离
def point_to_line_distance(point, line_start, line_end):
    """计算点到线段的距离"""
    line_vec = line_end - line_start
    point_vec = point - line_start
    line_len = np.linalg.norm(line_vec)
    
    if line_len == 0:
        return np.linalg.norm(point_vec)
    
    # 投影参数
    t = np.dot(point_vec, line_vec) / (line_len * line_len)
    t = max(0, min(1, t))  # 限制在线段范围内
    
    # 最近点
    closest_point = line_start + t * line_vec
    return np.linalg.norm(point - closest_point)

# 计算这条边到圆心的距离
dist_to_circle = point_to_line_distance(circle_center, edge_start, edge_end)

# 判断是否相交
intersects = dist_to_circle <= circle_radius

# 为了确保有红色边，我们强制选择一条与圆相交的边
# 重新选择一条更明显的边
edge_start = polygon_points[2]  # V3
edge_end = polygon_points[3]    # V4
dist_to_circle = point_to_line_distance(circle_center, edge_start, edge_end)
intersects = dist_to_circle <= circle_radius

# 绘制这条边，用不同颜色表示是否与圆相交
if intersects:
    ax_left.plot([edge_start[0], edge_end[0]], [edge_start[1], edge_end[1]], 'r-', linewidth=3, label='与圆相交的边')
else:
    ax_left.plot([edge_start[0], edge_end[0]], [edge_start[1], edge_end[1]], 'g-', linewidth=3, label='不与圆相交的边')

# 添加距离标注
if intersects:
    ax_left.annotate(f'距离: {dist_to_circle:.2f} < 半径: {circle_radius}', 
                xy=((edge_start[0] + edge_end[0])/2, (edge_start[1] + edge_end[1])/2),
                xytext=(5, 5), textcoords='offset points', fontsize=10, color='red',
                bbox=dict(boxstyle="round,pad=0.3", facecolor="yellow", alpha=0.7))

# 设置左图标题和标签
ax_left.set_title('多边形与圆的位置关系示意图', fontsize=16, weight='bold')
ax_left.set_xlabel('X坐标', fontsize=12)
ax_left.set_ylabel('Y坐标', fontsize=12)

# 添加图例
ax_left.legend(loc='upper right', fontsize=10)

# 右图：说明文字
ax_right = fig.add_subplot(gs[1])
ax_right.set_xlim(0, 1)
ax_right.set_ylim(0, 1)
ax_right.axis('off')

# 添加说明文字
ax_right.text(0.05, 0.95, '多边形与圆的位置关系：', fontsize=14, weight='bold', transform=ax_right.transAxes)
ax_right.text(0.05, 0.85, '绿色点：在圆内且在多边形内', fontsize=12, color='green', transform=ax_right.transAxes)
ax_right.text(0.05, 0.75, '橙色点：在圆内但在多边形外', fontsize=12, color='orange', transform=ax_right.transAxes)
ax_right.text(0.05, 0.65, '紫色点：在圆外但在多边形内', fontsize=12, color='purple', transform=ax_right.transAxes)
ax_right.text(0.05, 0.55, '棕色点：在圆外且在多边形外', fontsize=12, color='brown', transform=ax_right.transAxes)
ax_right.text(0.05, 0.45, '红色边：与圆相交的边', fontsize=12, color='red', transform=ax_right.transAxes)
ax_right.text(0.05, 0.35, '绿色边：不与圆相交的边', fontsize=12, color='green', transform=ax_right.transAxes)

ax_right.text(0.05, 0.25, '判断方法：', fontsize=14, weight='bold', transform=ax_right.transAxes)
ax_right.text(0.05, 0.15, '1. 点在圆内：距离 < 半径', fontsize=11, transform=ax_right.transAxes)
ax_right.text(0.05, 0.10, '2. 线段与圆相交：线段到圆心距离 ≤ 半径', fontsize=11, transform=ax_right.transAxes)
ax_right.text(0.05, 0.05, '3. 多边形与圆相交：有边相交或有顶点在圆内', fontsize=11, transform=ax_right.transAxes)

# 保存图片
plt.tight_layout()
plt.savefig('polygon_circle.svg', format='svg', dpi=300, bbox_inches='tight')
# plt.show()
