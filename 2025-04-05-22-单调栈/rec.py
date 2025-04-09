import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Rectangle

def draw_rectangle_illustration(heights, max_rect=None, save_path='rec.svg'):
    """
    绘制最大矩形面积示意图
    
    参数:
    heights: 每列高度列表
    max_rect: 最大矩形信息，格式为 (start_idx, end_idx, height, area)
    save_path: 保存路径
    """
    n = len(heights)
    
    # 创建图形
    fig, ax = plt.subplots(figsize=(10, 6))
    
    # 设置坐标轴
    ax.set_xlim(0, n + 1)
    ax.set_ylim(0, max(heights) * 1.2)
    
    # 绘制网格线
    for i in range(n + 1):
        ax.axvline(x=i, color='gray', linestyle='-', alpha=0.3)
    
    for i in range(max(heights) + 1):
        ax.axhline(y=i, color='gray', linestyle='-', alpha=0.3)
    
    # 绘制各列
    for i in range(n):
        x = i + 0.5
        height = heights[i]
        
        # 绘制列
        column = Rectangle((x - 0.5, 0), 1, height, 
                          facecolor='lightblue', edgecolor='black')
        ax.add_patch(column)
    
    # 如果提供了最大矩形信息，则高亮显示
    if max_rect:
        start_idx, end_idx, height, area = max_rect
        start_x = start_idx + 0.5 - 0.5
        width = end_idx - start_idx + 1
        
        # 绘制最大矩形
        max_rect_patch = Rectangle((start_x, 0), width, height, 
                                 facecolor='none', edgecolor='red', 
                                 linewidth=4, linestyle='--')
        ax.add_patch(max_rect_patch)
    
    # 移除坐标轴刻度
    ax.set_xticks([])
    ax.set_yticks([])
    
    # 移除坐标轴标签和标题
    ax.set_xlabel('')
    ax.set_ylabel('')
    ax.set_title('')
    
    # 移除图例
    ax.legend().remove()
    
    # 保存为SVG
    plt.savefig(save_path, format='svg', bbox_inches='tight')
    print(f"示意图已保存为 {save_path}")
    
    # 关闭图形
    plt.close()

# 示例数据
example_heights = [3, 2, 1, 4, 5, 2]
# 最大矩形信息: (起始索引, 结束索引, 高度, 面积)
max_rectangle = (3, 4, 4, 8)  # 从第4列到第5列，高度为4，面积为8

# 绘制示意图
draw_rectangle_illustration(example_heights, max_rectangle)
