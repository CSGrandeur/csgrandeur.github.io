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
fig, ax = plt.subplots(figsize=(10, 8))

# 定义向量
a = np.array([4, 3])  # 向量a
b = np.array([6, 1])  # 向量b
origin = np.array([0, 0])

# 绘制坐标轴
ax.axhline(y=0, color='k', linewidth=0.5, alpha=0.3)
ax.axvline(x=0, color='k', linewidth=0.5, alpha=0.3)
ax.grid(True, alpha=0.3)

# 绘制向量
ax.quiver(0, 0, a[0], a[1], angles='xy', scale_units='xy', scale=1, 
          color='red', linewidth=3, label='向量a', alpha=0.8)
ax.quiver(0, 0, b[0], b[1], angles='xy', scale_units='xy', scale=1, 
          color='blue', linewidth=3, label='向量b', alpha=0.8)

# 计算点积
dot_product = np.dot(a, b)
# 计算向量长度
a_norm = np.linalg.norm(a)
b_norm = np.linalg.norm(b)
# 计算夹角
cos_theta = dot_product / (a_norm * b_norm)
theta = np.arccos(np.clip(cos_theta, -1, 1))

# 计算b在a上的投影
projection_length = dot_product / a_norm
projection_vector = projection_length * a / a_norm

# 绘制投影
ax.quiver(0, 0, projection_vector[0], projection_vector[1], 
          angles='xy', scale_units='xy', scale=1, 
          color='green', linewidth=2, alpha=0.6, linestyle='--')

# 绘制投影线
ax.plot([b[0], projection_vector[0]], [b[1], projection_vector[1]], 
        'k--', alpha=0.5, linewidth=1)

# 添加标注
ax.text(a[0]/2, a[1]/2, 'a', fontsize=14, color='red', weight='bold')
ax.text(b[0]/2, b[1]/2, 'b', fontsize=14, color='blue', weight='bold')
ax.text(projection_vector[0]/2, projection_vector[1]/2, '投影', fontsize=12, color='green')

# 添加角度弧
angle_arc = patches.Arc((0, 0), 1, 1, theta1=0, theta2=np.degrees(theta), 
                       color='purple', linewidth=2)
ax.add_patch(angle_arc)
ax.text(0.8, 0.3, f'θ = {np.degrees(theta):.1f}°', fontsize=12, color='purple')

# 添加公式和计算结果（分多行显示）
ax.text(0.02, 0.98, '点积公式：a·b = |a|·|b|·cos(θ)', transform=ax.transAxes, fontsize=15,
        verticalalignment='top', bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.8))
ax.text(0.02, 0.93, r'$a \cdot b = a_x \cdot b_x + a_y \cdot b_y$', transform=ax.transAxes, fontsize=18,
        verticalalignment='top')
ax.text(0.02, 0.89, f'计算结果：{a[0]}×{b[0]} + {a[1]}×{b[1]} = {dot_product}', transform=ax.transAxes, fontsize=15,
        verticalalignment='top')
ax.text(0.02, 0.85, f'向量长度：|a| = {a_norm:.2f}, |b| = {b_norm:.2f}', transform=ax.transAxes, fontsize=15,
        verticalalignment='top')
ax.text(0.02, 0.81, f'投影长度：|b|·cos(θ) = {projection_length:.2f}', transform=ax.transAxes, fontsize=15,
        verticalalignment='top')

# 设置坐标轴范围
ax.set_xlim(-1, 7)
ax.set_ylim(-1, 5)
ax.set_aspect('equal')

# 添加标题和标签
ax.set_title('点积（Dot Product）几何意义', fontsize=22, weight='bold')
ax.set_xlabel('x轴', fontsize=16)
ax.set_ylabel('y轴', fontsize=16)
ax.legend()

# 添加几何意义说明
meaning_text = '几何意义：\n• 正值：夹角 < 90°\n• 零值：垂直\n• 负值：夹角 > 90°'
ax.text(0.02, 0.02, meaning_text, transform=ax.transAxes, fontsize=14,
        verticalalignment='bottom', bbox=dict(boxstyle='round', facecolor='lightblue', alpha=0.8))

plt.tight_layout()
plt.savefig('dot.svg', format='svg', dpi=300, bbox_inches='tight')
# plt.show()
