import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Polygon, FancyArrowPatch
import matplotlib.patches as patches

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 创建图形，只保留主图
fig = plt.figure(figsize=(8, 8))
ax = fig.add_subplot(1, 1, 1)
ax.set_xlim(-2, 8)
ax.set_ylim(-2, 8)
ax.set_aspect('equal')
ax.grid(True, alpha=0.3)

# 定义凸多边形顶点（逆时针顺序）
polygon_points = np.array([
    [1, 1],   # 左下
    [3, 0.5], # 下中
    [5, 2],   # 右下
    [4.5, 4], # 右上
    [2.5, 5], # 上中
    [0.5, 3]  # 左上
])

# 绘制原始凸多边形
polygon = Polygon(polygon_points, facecolor='lightblue', alpha=0.3, edgecolor='blue', linewidth=2)
ax.add_patch(polygon)

# 标记多边形顶点
for i, point in enumerate(polygon_points):
    ax.plot(point[0], point[1], 'ko', markersize=6)
    ax.annotate(f'V{i+1}', (point[0], point[1]), xytext=(3, 3), textcoords='offset points', fontsize=10)

# 定义半平面标记直线的颜色和样式
line_colors = ['red', 'orange', 'green', 'purple', 'brown', 'pink']
line_styles = ['-', '--', '-.', ':', '-', '--']

# 绘制每条边作为半平面标记直线
for i in range(len(polygon_points)):
    p1 = polygon_points[i]
    p2 = polygon_points[(i + 1) % len(polygon_points)]
    
    # 计算边的方向向量
    direction = p2 - p1
    length = np.linalg.norm(direction)
    
    # 计算垂直向量（指向多边形内部）
    normal = np.array([-direction[1], direction[0]]) / length
    
    # 扩展线段，使其足够长以显示半平面
    extension = 3.0
    start_extended = p1 - direction * extension
    end_extended = p2 + direction * extension
    
    # 绘制扩展的直线
    ax.plot([start_extended[0], end_extended[0]], 
            [start_extended[1], end_extended[1]], 
            color=line_colors[i], linestyle=line_styles[i], 
            linewidth=2, alpha=0.7)
    
    # 添加箭头表示半平面方向（指向多边形内部）
    mid_point = (p1 + p2) / 2
    arrow_start = mid_point + normal * 0.3
    arrow_end = mid_point + normal * 0.8
    
    arrow = FancyArrowPatch(arrow_start, arrow_end, 
                           arrowstyle='->', color=line_colors[i], 
                           linewidth=2, alpha=0.8)
    ax.add_patch(arrow)
    
    # 添加半平面标记文字
    text_pos = mid_point + normal * 1.2
    ax.annotate(f'H{i+1}', text_pos, fontsize=12, 
                color=line_colors[i], weight='bold',
                bbox=dict(boxstyle="round,pad=0.2", facecolor="white", alpha=0.8))

# 标记半平面交的结果区域
# 半平面交的结果就是原始凸多边形
result_polygon = Polygon(polygon_points, facecolor='yellow', alpha=0.4, 
                        edgecolor='black', linewidth=3, linestyle='-')
ax.add_patch(result_polygon)

# 添加一些测试点来展示半平面交的概念
test_points = [
    [2, 2],    # 在所有半平面内
    [4, 3],    # 在所有半平面内
    [0, 2],    # 在某些半平面外
    [6, 1],    # 在某些半平面外
]

point_colors = ['green', 'green', 'red', 'red']

for i, (point, color) in enumerate(zip(test_points, point_colors)):
    ax.plot(point[0], point[1], 'o', color=color, markersize=8)
    ax.annotate(f'P{i+1}', (point[0], point[1]), xytext=(5, 5), 
                textcoords='offset points', fontsize=12)

# 设置标题和标签
ax.set_title('半平面交示意图', fontsize=16, weight='bold')
ax.set_xlabel('X坐标', fontsize=12)
ax.set_ylabel('Y坐标', fontsize=12)

plt.tight_layout()
plt.savefig('half_plane_intersection.svg', format='svg', dpi=300, bbox_inches='tight')
# plt.show()
