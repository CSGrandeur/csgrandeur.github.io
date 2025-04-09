import matplotlib.pyplot as plt
from matplotlib.path import Path
import matplotlib.patches as patches

def draw_arc(ax, start, end, color, curve_height=0.75):
    verts = [start, end]
    codes = [Path.MOVETO, Path.CURVE3, Path.CURVE3]
    mid = ((start[0] + end[0]) / 2, (start[1] + end[1]) / 2 + curve_height)
    verts.insert(1, mid)
    path = Path(verts, codes)
    patch = patches.PathPatch(path, facecolor='none', edgecolor=color, lw=2)
    ax.add_patch(patch)

# 创建第一个图 - 原始图
fig1, ax1 = plt.subplots(figsize=(15, 3))

# 设置坐标轴范围和比例
ax1.set_xlim(-1, 20)
ax1.set_ylim(-2, 3)  # 减小上方留白
ax1.set_aspect('equal')

# 绘制数轴
ax1.axhline(y=0, color='black', linestyle='-', linewidth=1)

# 起始点
start_point = (0, 0)

# 绿色、蓝色、红色和紫色弧线的位置
green_points = [(i, 0) for i in range(0, 20)]
blue_points = [(i, 0) for i in range(0, 20, 2)]
red_points = [(i, 0) for i in range(0, 20, 4)]
purple_points = [(i, 0) for i in range(0, 20, 8)]

# 绘制绿色弧线
for i in range(len(green_points) - 1):
    draw_arc(ax1, green_points[i], green_points[i+1], 'green', curve_height=1)

# 绘制蓝色弧线
for i in range(len(blue_points) - 1):
    draw_arc(ax1, blue_points[i], blue_points[i+1], 'blue', curve_height=1.5)

# 绘制红色弧线
for i in range(len(red_points) - 1):
    draw_arc(ax1, red_points[i], red_points[i+1], 'red', curve_height=2)

# 绘制紫色弧线
for i in range(len(purple_points) - 1):
    draw_arc(ax1, purple_points[i], purple_points[i+1], 'purple', curve_height=2.5)

ax1.axis('off') # 关闭坐标轴

# 保存第一个图
plt.tight_layout(pad=0.02)  # 减小边距
plt.savefig("mult1.svg", format="svg", bbox_inches='tight', pad_inches=0.01)  # 减小保存时的边距
plt.close(fig1)

# 创建第二个图 - 只绘制起点发出四色线各一条
fig2, ax2 = plt.subplots(figsize=(15, 3))

# 设置坐标轴范围和比例
ax2.set_xlim(-1, 20)
ax2.set_ylim(-2, 3)  # 减小上方留白
ax2.set_aspect('equal')

# 绘制数轴
ax2.axhline(y=0, color='black', linestyle='-', linewidth=1)

# 起点位置
start_point = (0, 0)

# 绘制起点
ax2.plot(start_point[0], start_point[1], 'ko', markersize=8)

# 从起点发出四条线
# 绿色线 - 连接到下一个点
draw_arc(ax2, start_point, (start_point[0] + 1, 0), 'green', curve_height=1)

# 蓝色线 - 连接到下两个点
draw_arc(ax2, start_point, (start_point[0] + 2, 0), 'blue', curve_height=1.5)

# 红色线 - 连接到下四个点
draw_arc(ax2, start_point, (start_point[0] + 4, 0), 'red', curve_height=2)

# 紫色线 - 连接到下八个点
draw_arc(ax2, start_point, (start_point[0] + 8, 0), 'purple', curve_height=2.5)

ax2.axis('off') # 关闭坐标轴

# 保存第二个图
plt.tight_layout(pad=0.02)  # 减小边距
plt.savefig("mult2.svg", format="svg", bbox_inches='tight', pad_inches=0.01)  # 减小保存时的边距
plt.close(fig2)

# 创建第三个图 - 只画两个点，每个点都发出四种颜色线
fig3, ax3 = plt.subplots(figsize=(15, 3))

# 设置坐标轴范围和比例
ax3.set_xlim(-1, 20)
ax3.set_ylim(-2, 3)  # 减小上方留白
ax3.set_aspect('equal')

# 绘制数轴
ax3.axhline(y=0, color='black', linestyle='-', linewidth=1)

# 两个点的位置
point1 = (0, 0)  # 第一个点
point2 = (4, 0)  # 第二个点，在第一个点红色线落点位置

# 绘制两个点
ax3.plot(point1[0], point1[1], 'ko', markersize=8)
ax3.plot(point2[0], point2[1], 'ko', markersize=8)

# 从第一个点发出四条线
# 绿色线 - 连接到下一个点
draw_arc(ax3, point1, (point1[0] + 1, 0), 'green', curve_height=1)

# 蓝色线 - 连接到下两个点
draw_arc(ax3, point1, (point1[0] + 2, 0), 'blue', curve_height=1.5)

# 红色线 - 连接到下四个点
draw_arc(ax3, point1, (point1[0] + 4, 0), 'red', curve_height=2)

# 紫色线 - 连接到下八个点
draw_arc(ax3, point1, (point1[0] + 8, 0), 'purple', curve_height=2.5)

# 从第二个点发出四条线
# 绿色线 - 连接到下一个点
draw_arc(ax3, point2, (point2[0] + 1, 0), 'green', curve_height=1)

# 蓝色线 - 连接到下两个点
draw_arc(ax3, point2, (point2[0] + 2, 0), 'blue', curve_height=1.5)

# 红色线 - 连接到下四个点
draw_arc(ax3, point2, (point2[0] + 4, 0), 'red', curve_height=2)

# 紫色线 - 连接到下八个点
draw_arc(ax3, point2, (point2[0] + 8, 0), 'purple', curve_height=2.5)

ax3.axis('off') # 关闭坐标轴

# 保存第三个图
plt.tight_layout(pad=0.02)  # 减小边距
plt.savefig("mult3.svg", format="svg", bbox_inches='tight', pad_inches=0.01)  # 减小保存时的边距
plt.close(fig3)

# 创建第四个图 - 每个点都发出四条线
fig4, ax4 = plt.subplots(figsize=(15, 3))

# 设置坐标轴范围和比例
ax4.set_xlim(-1, 20)
ax4.set_ylim(-2, 3)  # 减小上方留白
ax4.set_aspect('equal')

# 绘制数轴
ax4.axhline(y=0, color='black', linestyle='-', linewidth=1)

# 所有点的位置
all_points = [(i, 0) for i in range(0, 20)]

# 绘制所有点
for point in all_points:
    ax4.plot(point[0], point[1], 'ko', markersize=5)

# 从每个点发出四条线
for point in all_points:
    # 绿色线 - 连接到下一个点
    if point[0] + 1 < 20:
        draw_arc(ax4, point, (point[0] + 1, 0), 'green', curve_height=1)
    
    # 蓝色线 - 连接到下两个点
    if point[0] + 2 < 20:
        draw_arc(ax4, point, (point[0] + 2, 0), 'blue', curve_height=1.5)
    
    # 红色线 - 连接到下四个点
    if point[0] + 4 < 20:
        draw_arc(ax4, point, (point[0] + 4, 0), 'red', curve_height=2)
    
    # 紫色线 - 连接到下八个点
    if point[0] + 8 < 20:
        draw_arc(ax4, point, (point[0] + 8, 0), 'purple', curve_height=2.5)

ax4.axis('off') # 关闭坐标轴

# 保存第四个图
plt.tight_layout(pad=0.02)  # 减小边距
plt.savefig("mult4.svg", format="svg", bbox_inches='tight', pad_inches=0.01)  # 减小保存时的边距
plt.close(fig4)

# 创建一个包含所有四个图的组合图，用于显示
fig_all, (ax_all1, ax_all2, ax_all3, ax_all4) = plt.subplots(4, 1, figsize=(15, 12), 
                                                             gridspec_kw={'hspace': 0.01, 'height_ratios': [1, 1, 1, 1]})

# 复制第一个图的内容到组合图的第一个子图
ax_all1.set_xlim(-1, 20)
ax_all1.set_ylim(-2, 3)  # 减小上方留白
ax_all1.set_aspect('equal')
ax_all1.axhline(y=0, color='black', linestyle='-', linewidth=1)

# 绘制绿色弧线
for i in range(len(green_points) - 1):
    draw_arc(ax_all1, green_points[i], green_points[i+1], 'green', curve_height=1)

# 绘制蓝色弧线
for i in range(len(blue_points) - 1):
    draw_arc(ax_all1, blue_points[i], blue_points[i+1], 'blue', curve_height=1.5)

# 绘制红色弧线
for i in range(len(red_points) - 1):
    draw_arc(ax_all1, red_points[i], red_points[i+1], 'red', curve_height=2)

# 绘制紫色弧线
for i in range(len(purple_points) - 1):
    draw_arc(ax_all1, purple_points[i], purple_points[i+1], 'purple', curve_height=2.5)

ax_all1.axis('off')

# 复制第二个图的内容到组合图的第二个子图
ax_all2.set_xlim(-1, 20)
ax_all2.set_ylim(-2, 3)  # 减小上方留白
ax_all2.set_aspect('equal')
ax_all2.axhline(y=0, color='black', linestyle='-', linewidth=1)

# 绘制起点
ax_all2.plot(start_point[0], start_point[1], 'ko', markersize=8)

# 从起点发出四条线
draw_arc(ax_all2, start_point, (start_point[0] + 1, 0), 'green', curve_height=1)
draw_arc(ax_all2, start_point, (start_point[0] + 2, 0), 'blue', curve_height=1.5)
draw_arc(ax_all2, start_point, (start_point[0] + 4, 0), 'red', curve_height=2)
draw_arc(ax_all2, start_point, (start_point[0] + 8, 0), 'purple', curve_height=2.5)

ax_all2.axis('off')

# 复制第三个图的内容到组合图的第三个子图
ax_all3.set_xlim(-1, 20)
ax_all3.set_ylim(-2, 3)  # 减小上方留白
ax_all3.set_aspect('equal')
ax_all3.axhline(y=0, color='black', linestyle='-', linewidth=1)

# 绘制两个点
ax_all3.plot(point1[0], point1[1], 'ko', markersize=8)
ax_all3.plot(point2[0], point2[1], 'ko', markersize=8)

# 从第一个点发出四条线
draw_arc(ax_all3, point1, (point1[0] + 1, 0), 'green', curve_height=1)
draw_arc(ax_all3, point1, (point1[0] + 2, 0), 'blue', curve_height=1.5)
draw_arc(ax_all3, point1, (point1[0] + 4, 0), 'red', curve_height=2)
draw_arc(ax_all3, point1, (point1[0] + 8, 0), 'purple', curve_height=2.5)

# 从第二个点发出四条线
draw_arc(ax_all3, point2, (point2[0] + 1, 0), 'green', curve_height=1)
draw_arc(ax_all3, point2, (point2[0] + 2, 0), 'blue', curve_height=1.5)
draw_arc(ax_all3, point2, (point2[0] + 4, 0), 'red', curve_height=2)
draw_arc(ax_all3, point2, (point2[0] + 8, 0), 'purple', curve_height=2.5)

ax_all3.axis('off')

# 复制第四个图的内容到组合图的第四个子图
ax_all4.set_xlim(-1, 20)
ax_all4.set_ylim(-2, 3)  # 减小上方留白
ax_all4.set_aspect('equal')
ax_all4.axhline(y=0, color='black', linestyle='-', linewidth=1)

# 绘制所有点
for point in all_points:
    ax_all4.plot(point[0], point[1], 'ko', markersize=5)

# 从每个点发出四条线
for point in all_points:
    # 绿色线 - 连接到下一个点
    if point[0] + 1 < 20:
        draw_arc(ax_all4, point, (point[0] + 1, 0), 'green', curve_height=1)
    
    # 蓝色线 - 连接到下两个点
    if point[0] + 2 < 20:
        draw_arc(ax_all4, point, (point[0] + 2, 0), 'blue', curve_height=1.5)
    
    # 红色线 - 连接到下四个点
    if point[0] + 4 < 20:
        draw_arc(ax_all4, point, (point[0] + 4, 0), 'red', curve_height=2)
    
    # 紫色线 - 连接到下八个点
    if point[0] + 8 < 20:
        draw_arc(ax_all4, point, (point[0] + 8, 0), 'purple', curve_height=2.5)

ax_all4.axis('off')

# 保存组合图
plt.tight_layout(pad=0.02)  # 减小边距
plt.savefig("mult1234.svg", format="svg", bbox_inches='tight', pad_inches=0.01)  # 减小保存时的边距
# plt.show()