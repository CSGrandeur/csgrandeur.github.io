import matplotlib.pyplot as plt
import numpy as np
from matplotlib import rcParams
import matplotlib.patches as patches

# 设置matplotlib支持中文和大字号
rcParams['font.sans-serif'] = [
    'SimHei', 'Arial Unicode MS', 'Microsoft YaHei',
    'Noto Sans CJK SC', 'Noto Sans CJK SC Regular',
    'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'WenQuanYi Micro Hei',
]
rcParams['axes.unicode_minus'] = False
plt.rcParams['font.size'] = 12

# 创建图形
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 8))

# 定义向量
a = np.array([4, 2])  # 向量a
b = np.array([2, 4])  # 向量b
origin = np.array([0, 0])

# 计算叉积
cross_product = np.cross(a, b)
# 计算向量长度
a_norm = np.linalg.norm(a)
b_norm = np.linalg.norm(b)
# 计算夹角
cos_theta = np.dot(a, b) / (a_norm * b_norm)
theta = np.arccos(np.clip(cos_theta, -1, 1))

# 左图：叉积的方向判断
ax1.axhline(y=0, color='k', linewidth=0.5, alpha=0.3)
ax1.axvline(x=0, color='k', linewidth=0.5, alpha=0.3)
ax1.grid(True, alpha=0.3)

# 绘制向量
ax1.quiver(0, 0, a[0], a[1], angles='xy', scale_units='xy', scale=1, 
           color='red', linewidth=3, label='向量a', alpha=0.8)
ax1.quiver(0, 0, b[0], b[1], angles='xy', scale_units='xy', scale=1, 
           color='blue', linewidth=3, label='向量b', alpha=0.8)

# 添加角度弧
angle_arc = patches.Arc((0, 0), 1.5, 1.5, theta1=0, theta2=np.degrees(theta), 
                       color='purple', linewidth=2)
ax1.add_patch(angle_arc)
ax1.text(1.2, 0.5, f'θ = {np.degrees(theta):.1f}°', fontsize=12, color='purple')

# 添加方向箭头（表示叉积方向）
direction_length = 0.8
if cross_product > 0:
    # 逆时针方向
    direction_arrow = np.array([-0.5, 0.5])
    direction_text = "逆时针"
    direction_color = "green"
else:
    # 顺时针方向
    direction_arrow = np.array([0.5, -0.5])
    direction_text = "顺时针"
    direction_color = "orange"

ax1.quiver(0.5, 0.5, direction_arrow[0], direction_arrow[1], 
           angles='xy', scale_units='xy', scale=1, 
           color=direction_color, linewidth=2, alpha=0.8, headwidth=8)

# 添加标注
ax1.text(a[0]/2, a[1]/2, 'a', fontsize=14, color='red', weight='bold')
ax1.text(b[0]/2, b[1]/2, 'b', fontsize=14, color='blue', weight='bold')
ax1.text(0.5 + direction_arrow[0]/2, 0.5 + direction_arrow[1]/2, direction_text, 
         fontsize=12, color=direction_color, weight='bold')

# 添加公式和计算结果（分多行显示）
ax1.text(0.02, 0.98, '叉积公式：a×b = |a|·|b|·sin(θ)', transform=ax1.transAxes, fontsize=15,
         verticalalignment='top', bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.8))
ax1.text(0.02, 0.93, r'$a \times b = a_x b_y - a_y b_x$', transform=ax1.transAxes, fontsize=18,
         verticalalignment='top')
ax1.text(0.02, 0.89, f'计算结果：{a[0]}×{b[1]} - {a[1]}×{b[0]} = {cross_product}', transform=ax1.transAxes, fontsize=15,
         verticalalignment='top')
ax1.text(0.02, 0.85, f'方向判断：{direction_text}', transform=ax1.transAxes, fontsize=15,
         verticalalignment='top')

ax1.set_xlim(-1, 5)
ax1.set_ylim(-1, 5)
ax1.set_aspect('equal')
ax1.set_title('叉积（Cross Product）方向判断', fontsize=20, weight='bold')
ax1.set_xlabel('x轴', fontsize=15)
ax1.set_ylabel('y轴', fontsize=15)
ax1.legend()

# 右图：叉积的面积意义
ax2.axhline(y=0, color='k', linewidth=0.5, alpha=0.3)
ax2.axvline(x=0, color='k', linewidth=0.5, alpha=0.3)
ax2.grid(True, alpha=0.3)

# 绘制向量
ax2.quiver(0, 0, a[0], a[1], angles='xy', scale_units='xy', scale=1, 
           color='red', linewidth=3, label='向量a', alpha=0.8)
ax2.quiver(0, 0, b[0], b[1], angles='xy', scale_units='xy', scale=1, 
           color='blue', linewidth=3, label='向量b', alpha=0.8)

# 绘制平行四边形
parallelogram = np.array([[0, 0], a, a + b, b])
ax2.plot(parallelogram[:, 0], parallelogram[:, 1], 'g--', alpha=0.6, linewidth=2)
ax2.fill(parallelogram[:, 0], parallelogram[:, 1], alpha=0.2, color='green')

# 计算面积
area = abs(cross_product)

# 添加标注
ax2.text(a[0]/2, a[1]/2, 'a', fontsize=14, color='red', weight='bold')
ax2.text(b[0]/2, b[1]/2, 'b', fontsize=14, color='blue', weight='bold')
ax2.text((a[0] + b[0])/2, (a[1] + b[1])/2, f'面积 = {area}', 
         fontsize=15, color='green', weight='bold')

# 添加面积说明
area_text = f'面积意义：\n• 平行四边形面积 = |a×b|\n'
area_text += f'• 三角形面积 = |a×b|/2\n'
area_text += f'• 当前面积 = {area:.1f}'

ax2.text(0.02, 0.98, area_text, transform=ax2.transAxes, fontsize=14,
         verticalalignment='top', bbox=dict(boxstyle='round', facecolor='lightgreen', alpha=0.8))

ax2.set_xlim(-1, 7)
ax2.set_ylim(-1, 7)
ax2.set_aspect('equal')
ax2.set_title('叉积（Cross Product）面积意义', fontsize=20, weight='bold')
ax2.set_xlabel('x轴', fontsize=15)
ax2.set_ylabel('y轴', fontsize=15)
ax2.legend()

# 添加几何意义说明
meaning_text = '几何意义：\n• 正值：b在a逆时针方向\n• 零值：共线\n• 负值：b在a顺时针方向'
fig.text(0.02, 0.02, meaning_text, fontsize=14,
         bbox=dict(boxstyle='round', facecolor='lightblue', alpha=0.8))

plt.tight_layout()
plt.savefig('cross.svg', format='svg', dpi=300, bbox_inches='tight')
# plt.show()
