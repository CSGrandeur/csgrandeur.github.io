import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Polygon
import matplotlib.patches as patches

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 创建图形
fig, ax = plt.subplots(1, 1, figsize=(12, 8))

# 定义有深V的凹多边形顶点
polygon_points = np.array([
    [1, 1],   # 左下
    [6, 1],   # 右下
    [6, 5],   # 右上
    [5, 5],   # 右上内
    [4, 2],   # V的底部
    [3, 5],   # 左上内
    [2, 5],   # 左上
    [1, 3]    # 左侧
])

# 测试点 - 放在深V的左边
test_point = np.array([2.5, 3.5])  # 在多边形内

# 绘制多边形
polygon = Polygon(polygon_points, facecolor='lightblue', alpha=0.6, edgecolor='blue', linewidth=2)
ax.add_patch(polygon)

# 绘制多边形顶点
ax.plot(polygon_points[:, 0], polygon_points[:, 1], 'ko', markersize=6)
for i, point in enumerate(polygon_points):
    ax.annotate(f'V{i+1}', (point[0], point[1]), xytext=(3, 3), textcoords='offset points', fontsize=10)

# 绘制测试点
ax.plot(test_point[0], test_point[1], 'ro', markersize=12, label='测试点P')

# 绘制向右的水平射线
ray_start = test_point
ray_end = np.array([test_point[0] + 5, test_point[1]])  # 向右延伸5个单位
ax.arrow(ray_start[0], ray_start[1], 5, 0, head_width=0.2, head_length=0.3, 
         fc='red', ec='red', alpha=0.8, linewidth=3)

# 添加射线标注
ax.annotate('水平射线\n(向右)', (ray_start[0] + 2.5, ray_start[1] + 0.3), 
           fontsize=12, color='red', weight='bold',
           bbox=dict(boxstyle="round,pad=0.3", facecolor="yellow", alpha=0.7))

# 计算射线与边的实际交点
intersections = []
for i in range(len(polygon_points)):
    p1 = polygon_points[i]
    p2 = polygon_points[(i + 1) % len(polygon_points)]
    
    # 射线方程：y = test_point[1], x >= test_point[0]
    # 边方程：参数方程 p1 + t*(p2-p1), t in [0,1]
    
    # 检查边是否与水平射线相交
    if p1[1] <= test_point[1] <= p2[1] or p2[1] <= test_point[1] <= p1[1]:
        if p2[1] != p1[1]:  # 边不是水平的
            # 计算交点参数t
            t = (test_point[1] - p1[1]) / (p2[1] - p1[1])
            if 0 <= t <= 1:  # 交点在边上
                intersect_x = p1[0] + t * (p2[0] - p1[0])
                if intersect_x > test_point[0]:  # 交点在射线右侧
                    intersections.append((intersect_x, test_point[1]))
        elif p1[1] == test_point[1] and p2[1] == test_point[1]:  # 边是水平的
            # 检查边的x范围是否与射线相交
            min_x = min(p1[0], p2[0])
            max_x = max(p1[0], p2[0])
            if min_x > test_point[0]:
                intersections.append((min_x, test_point[1]))

# 去重并排序交点
intersections = sorted(list(set(intersections)), key=lambda x: x[0])

# 标记射线与边的交点
for i, (x, y) in enumerate(intersections):
    ax.plot(x, y, 'go', markersize=8)
    ax.annotate(f'交点{i+1}', (x, y), xytext=(5, 5), textcoords='offset points', fontsize=10)

# 分析每条边对flag的贡献
flag_count = 0
edge_colors = ['green', 'orange', 'purple', 'brown', 'pink', 'cyan', 'magenta', 'gray']

for i in range(len(polygon_points)):
    p1 = polygon_points[i]
    p2 = polygon_points[(i + 1) % len(polygon_points)]
    
    # 计算叉积和y坐标差
    cross_product = (p2[0] - p1[0]) * (test_point[1] - p1[1]) - (p2[1] - p1[1]) * (test_point[0] - p1[0])
    d1 = p1[1] - test_point[1]
    d2 = p2[1] - test_point[1]
    
    # 判断是否贡献flag
    contributes = False
    if cross_product > 0 and d1 <= 0 and d2 > 0:
        flag_count += 1
        contributes = True
    elif cross_product < 0 and d2 <= 0 and d1 > 0:
        flag_count -= 1
        contributes = True
    
    # 绘制边，用不同颜色表示是否贡献flag
    if contributes:
        color = 'red'
        linewidth = 4
    else:
        color = edge_colors[i % len(edge_colors)]
        linewidth = 2
    
    ax.plot([p1[0], p2[0]], [p1[1], p2[1]], color=color, linewidth=linewidth, alpha=0.8)
    
    # 添加边的标签
    mid_x = (p1[0] + p2[0]) / 2
    mid_y = (p1[1] + p2[1]) / 2
    if contributes:
        ax.annotate(f'边{i+1}\nflag{"++" if cross_product > 0 else "--"}', 
                   (mid_x, mid_y), xytext=(5, 5), textcoords='offset points', 
                   fontsize=9, bbox=dict(boxstyle="round,pad=0.2", facecolor="yellow", alpha=0.7))
    else:
        ax.annotate(f'边{i+1}\n无贡献', (mid_x, mid_y), xytext=(5, 5), 
                   textcoords='offset points', fontsize=9, alpha=0.7)

# 设置坐标轴
ax.set_xlim(0, 7)
ax.set_ylim(0, 6)
ax.set_aspect('equal')
ax.grid(True, alpha=0.3)

# 添加标题和标签
ax.set_title(f'点在多边形内外判断 - 射线法 (最终flag={flag_count})', fontsize=16, fontweight='bold')
ax.set_xlabel('X坐标', fontsize=12)
ax.set_ylabel('Y坐标', fontsize=12)

# 添加图例
ax.legend(loc='upper right', fontsize=10)

# 添加说明文字
ax.text(0.02, 0.98, 
        '射线法原理：\n'
        '• 从测试点P向右发射水平射线\n'
        '• 统计射线与多边形边界的交点数\n'
        '• 改进算法：只有从下向上穿过的边才贡献flag\n'
        f'• 交点数量：{len(intersections)} (奇数)\n'
        f'• 最终flag：{flag_count} (≠0，点在多边形内)', 
        transform=ax.transAxes, fontsize=11, verticalalignment='top',
        bbox=dict(boxstyle="round,pad=0.5", facecolor="lightyellow", alpha=0.8))

plt.tight_layout()
plt.savefig('polygon_point.svg', format='svg', bbox_inches='tight', dpi=300)
# plt.show()
