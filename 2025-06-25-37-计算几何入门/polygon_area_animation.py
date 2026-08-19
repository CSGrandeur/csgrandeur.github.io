import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
from matplotlib.animation import FuncAnimation
import matplotlib.font_manager as fm

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 创建图形
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 8))
fig.suptitle('多边形面积计算过程演示', fontsize=20, fontweight='bold')

# 凸多边形顶点（逆时针）
convex_points = np.array([
    [1, 1], [3, 1], [4, 3], [3, 5], [1, 4], [0, 2]
])

# 凹多边形顶点（逆时针）
concave_points = np.array([
    [1, 1], [4, 1], [5, 3], [3, 4], [3.5, 1.5], [0, 2]
])

def calculate_area(points):
    """计算多边形面积"""
    n = len(points)
    area = 0
    for i in range(n):
        j = (i + 1) % n
        area += points[i][0] * points[j][1]
        area -= points[j][0] * points[i][1]
    return abs(area) / 2

def calculate_triangle_area(p1, p2, p3):
    """计算三角形面积"""
    return abs((p2[0] - p1[0]) * (p3[1] - p1[1]) - (p3[0] - p1[0]) * (p2[1] - p1[1])) / 2

def update(frame):
    ax1.clear()
    ax2.clear()
    
    # 设置坐标轴范围
    ax1.set_xlim(-1, 6)
    ax1.set_ylim(-1, 7)
    ax2.set_xlim(-1, 6)
    ax2.set_ylim(-1, 7)
    
    # 设置标题
    ax1.set_title('凸多边形面积计算', fontsize=16, fontweight='bold')
    ax2.set_title('“凹”多边形面积计算', fontsize=16, fontweight='bold')
    
    # 绘制网格
    ax1.grid(True, alpha=0.3)
    ax2.grid(True, alpha=0.3)
    
    # 计算当前帧对应的进度
    progress = frame / 100.0
    
    # 绘制凸多边形
    n_convex = len(convex_points)
    for i in range(n_convex):
        # 绘制顶点
        ax1.plot(convex_points[i][0], convex_points[i][1], 'ro', markersize=8)
        ax1.text(convex_points[i][0] + 0.1, convex_points[i][1] + 0.1, 
                f'P{i}', fontsize=12, fontweight='bold')
        
        # 绘制边
        j = (i + 1) % n_convex
        if i < int(progress * n_convex):
            # 已处理的边用实线
            ax1.plot([convex_points[i][0], convex_points[j][0]], 
                    [convex_points[i][1], convex_points[j][1]], 
                    'b-', linewidth=2)
        else:
            # 未处理的边用虚线
            ax1.plot([convex_points[i][0], convex_points[j][0]], 
                    [convex_points[i][1], convex_points[j][1]], 
                    'b--', linewidth=2, alpha=0.5)
    
    # 绘制凹多边形
    n_concave = len(concave_points)
    for i in range(n_concave):
        # 绘制顶点
        ax2.plot(concave_points[i][0], concave_points[i][1], 'ro', markersize=8)
        ax2.text(concave_points[i][0] + 0.1, concave_points[i][1] + 0.1, 
                f'P{i}', fontsize=12, fontweight='bold')
        
        # 绘制边
        j = (i + 1) % n_concave
        if i < int(progress * n_concave):
            # 已处理的边用实线
            ax2.plot([concave_points[i][0], concave_points[j][0]], 
                    [concave_points[i][1], concave_points[j][1]], 
                    'g-', linewidth=2)
        else:
            # 未处理的边用虚线
            ax2.plot([concave_points[i][0], concave_points[j][0]], 
                    [concave_points[i][1], concave_points[j][1]], 
                    'g--', linewidth=2, alpha=0.5)
    
    # 绘制三角形分解
    if progress > 0:
        # 凸多边形的三角形分解
        current_vertices = min(int(progress * n_convex) + 1, n_convex)
        if current_vertices >= 3:
            # 从P0出发连接其他顶点形成三角形
            for i in range(1, current_vertices - 1):
                triangle = [convex_points[0], convex_points[i], convex_points[i+1]]
                triangle_area = calculate_triangle_area(triangle[0], triangle[1], triangle[2])
                
                # 绘制三角形填充
                triangle_patch = patches.Polygon(triangle, facecolor='lightblue', 
                                               alpha=0.3, edgecolor='blue', linewidth=1)
                ax1.add_patch(triangle_patch)
                
                # 显示三角形面积
                center_x = (triangle[0][0] + triangle[1][0] + triangle[2][0]) / 3
                center_y = (triangle[0][1] + triangle[1][1] + triangle[2][1]) / 3
                ax1.text(center_x, center_y, f'{triangle_area:.1f}', 
                        fontsize=10, fontweight='bold', ha='center', va='center',
                        bbox=dict(boxstyle="round,pad=0.2", facecolor="white", alpha=0.8))
        
        # 凹多边形的三角形分解
        current_vertices2 = min(int(progress * n_concave) + 1, n_concave)
        if current_vertices2 >= 3:
            # 从P0出发连接其他顶点形成三角形
            for i in range(1, current_vertices2 - 1):
                triangle = [concave_points[0], concave_points[i], concave_points[i+1]]
                triangle_area = ((concave_points[i][0] - concave_points[0][0]) * (concave_points[i+1][1] - concave_points[0][1]) -
                                 (concave_points[i+1][0] - concave_points[0][0]) * (concave_points[i][1] - concave_points[0][1])) / 2
                abs_area = abs(triangle_area)
                # 判断正负面积
                if triangle_area < 0:
                    # 负三角形用橙色
                    triangle_patch = patches.Polygon(triangle, facecolor='orange', 
                                                   alpha=0.5, edgecolor='red', linewidth=2)
                    label = f'-{abs_area:.1f}'
                else:
                    triangle_patch = patches.Polygon(triangle, facecolor='lightgreen', 
                                                   alpha=0.3, edgecolor='green', linewidth=1)
                    label = f'{abs_area:.1f}'
                ax2.add_patch(triangle_patch)
                # 显示三角形面积
                center_x = (triangle[0][0] + triangle[1][0] + triangle[2][0]) / 3
                center_y = (triangle[0][1] + triangle[1][1] + triangle[2][1]) / 3
                ax2.text(center_x, center_y, label, 
                        fontsize=10, fontweight='bold', ha='center', va='center',
                        bbox=dict(boxstyle="round,pad=0.2", facecolor="white", alpha=0.8))
    
    # 计算并显示面积
    if progress > 0:
        # 计算当前进度下的面积
        current_convex = convex_points[:int(progress * n_convex) + 1]
        if len(current_convex) >= 3:
            convex_area = calculate_area(current_convex)
        else:
            convex_area = 0
            
        current_concave = concave_points[:int(progress * n_concave) + 1]
        if len(current_concave) >= 3:
            concave_area = calculate_area(current_concave)
        else:
            concave_area = 0
        
        # 显示面积信息
        ax1.text(0.5, 6.5, f'当前面积: {convex_area:.2f}', 
                fontsize=14, fontweight='bold', 
                bbox=dict(boxstyle="round,pad=0.3", facecolor="lightblue", alpha=0.8))
        ax2.text(0.5, 6.5, f'当前面积: {concave_area:.2f}', 
                fontsize=14, fontweight='bold',
                bbox=dict(boxstyle="round,pad=0.3", facecolor="lightgreen", alpha=0.8))
    
    # 显示最终面积
    if progress >= 1:
        final_convex_area = calculate_area(convex_points)
        final_concave_area = calculate_area(concave_points)
        
        ax1.text(0.5, 5.5, f'最终面积: {final_convex_area:.2f}', 
                fontsize=16, fontweight='bold', color='red',
                bbox=dict(boxstyle="round,pad=0.3", facecolor="yellow", alpha=0.8))
        ax2.text(0.5, 5.5, f'最终面积: {final_concave_area:.2f}', 
                fontsize=16, fontweight='bold', color='red',
                bbox=dict(boxstyle="round,pad=0.3", facecolor="yellow", alpha=0.8))
    
    # 显示计算步骤
    if progress > 0 and progress < 1:
        step = int(progress * n_convex)
        ax1.text(0.5, -0.5, f'步骤 {step+1}: 处理边 P{step} → P{(step+1)%n_convex}', 
                fontsize=12, fontweight='bold',
                bbox=dict(boxstyle="round,pad=0.3", facecolor="lightyellow", alpha=0.8))
        
        step2 = int(progress * n_concave)
        ax2.text(0.5, -0.5, f'步骤 {step2+1}: 处理边 P{step2} → P{(step2+1)%n_concave}', 
                fontsize=12, fontweight='bold',
                bbox=dict(boxstyle="round,pad=0.3", facecolor="lightyellow", alpha=0.8))
    
    # 显示公式和说明
    ax1.text(0.5, 4.5, '面积 = |∑(xi×yi+1 - xi+1×yi)| / 2', 
            fontsize=12, fontstyle='italic',
            bbox=dict(boxstyle="round,pad=0.3", facecolor="lightgray", alpha=0.8))
    ax2.text(0.5, 4.5, '面积 = |∑(xi×yi+1 - xi+1×yi)| / 2', 
            fontsize=12, fontstyle='italic',
            bbox=dict(boxstyle="round,pad=0.3", facecolor="lightgray", alpha=0.8))
    
    # 显示三角形分解说明
    if progress > 0:
        ax1.text(0.5, 3.5, '三角形分解: 从P0出发连接其他顶点', 
                fontsize=11, fontweight='bold',
                bbox=dict(boxstyle="round,pad=0.3", facecolor="lightcyan", alpha=0.8))
        ax2.text(0.5, 3.5, '三角形分解: 从P0出发连接其他顶点', 
                fontsize=11, fontweight='bold',
                bbox=dict(boxstyle="round,pad=0.3", facecolor="lightcyan", alpha=0.8))

# 创建动画
anim = FuncAnimation(fig, update, frames=101, interval=100, repeat=True)

# 保存动画
anim.save('polygon_area_animation.gif', writer='pillow', fps=10, dpi=100)

print("多边形面积计算动画已生成: polygon_area_animation.gif")

# 显示最终面积
final_convex_area = calculate_area(convex_points)
final_concave_area = calculate_area(concave_points)
print(f"凸多边形面积: {final_convex_area:.2f}")
print(f"凹多边形面积: {final_concave_area:.2f}") 