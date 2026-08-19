import matplotlib.pyplot as plt
import numpy as np
from matplotlib import rcParams
import matplotlib.patches as patches
from matplotlib.patches import Polygon

rcParams['font.sans-serif'] = [
    'SimHei', 'Arial Unicode MS', 'Microsoft YaHei',
    'Noto Sans CJK SC', 'Noto Sans CJK SC Regular',
    'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'WenQuanYi Micro Hei',
]
rcParams['axes.unicode_minus'] = False
plt.rcParams['font.size'] = 14

# 1. 三点共线
fig, ax = plt.subplots(figsize=(5, 5))
A = np.array([1, 1])
B = np.array([3, 3])
C = np.array([5, 5])
ax.plot([A[0], B[0], C[0]], [A[1], B[1], C[1]], 'ro-', label='三点共线')
for P, name in zip([A, B, C], ['A', 'B', 'C']):
    ax.text(P[0], P[1]+0.2, name, color='red', fontsize=16, ha='center')
ax.set_title('三点共线示意', fontsize=18)
ax.set_xlim(0, 6)
ax.set_ylim(0, 6)
ax.set_aspect('equal')
ax.legend()
plt.tight_layout()
plt.savefig('line_point_collinear.svg', format='svg')
plt.close()

# 2. 点到直线距离
fig, ax = plt.subplots(figsize=(5, 5))
A = np.array([1, 1])
B = np.array([5, 4])
P = np.array([3, 4])
# 直线AB
ax.plot([A[0], B[0]], [A[1], B[1]], 'b-', label='直线AB')
# 点P
ax.plot(P[0], P[1], 'ro', label='点P')
# 垂足
AB = B - A
AP = P - A
proj_len = np.dot(AP, AB) / np.linalg.norm(AB)
proj = A + proj_len * AB / np.linalg.norm(AB)
ax.plot([P[0], proj[0]], [P[1], proj[1]], 'g--', label='距离')
ax.plot(proj[0], proj[1], 'go', label='垂足')
ax.text(A[0], A[1]-0.3, 'A', color='blue', fontsize=16, ha='center')
ax.text(B[0], B[1]+0.2, 'B', color='blue', fontsize=16, ha='center')
ax.text(P[0]+0.2, P[1], 'P', color='red', fontsize=16)
ax.text(proj[0]-0.2, proj[1], 'H', color='green', fontsize=16)
ax.set_title('点到直线距离', fontsize=18)
ax.set_xlim(0, 6)
ax.set_ylim(0, 6)
ax.set_aspect('equal')
ax.legend()
plt.tight_layout()
plt.savefig('line_point_dist2line.svg', format='svg')
plt.close()

# 3. 点绕点逆时针旋转
fig, ax = plt.subplots(figsize=(5, 5))
O = np.array([3, 3])
P = np.array([5, 3])
theta = np.pi/3  # 60度
Q = O + np.array([
    np.cos(theta)*(P[0]-O[0]) - np.sin(theta)*(P[1]-O[1]),
    np.sin(theta)*(P[0]-O[0]) + np.cos(theta)*(P[1]-O[1])
])
ax.plot([O[0], P[0]], [O[1], P[1]], 'b-', label='原始')
ax.plot([O[0], Q[0]], [O[1], Q[1]], 'g-', label='旋转后')
ax.plot(O[0], O[1], 'ko', label='中心O')
ax.plot(P[0], P[1], 'ro', label='P')
ax.plot(Q[0], Q[1], 'mo', label='Q')
ax.annotate('', xy=Q, xytext=O, arrowprops=dict(arrowstyle='->', color='green', lw=2))
ax.annotate('', xy=P, xytext=O, arrowprops=dict(arrowstyle='->', color='blue', lw=2))
arc = patches.Arc(O, 2, 2, theta1=0, theta2=60, color='purple', lw=2)
ax.add_patch(arc)
ax.text(O[0]+1.1, O[1]+0.3, r'$\theta$', color='purple', fontsize=16)
ax.text(O[0], O[1]-0.3, 'O', color='black', fontsize=16, ha='center')
ax.text(P[0]+0.2, P[1], 'P', color='red', fontsize=16)
ax.text(Q[0]+0.2, Q[1], 'Q', color='magenta', fontsize=16)
ax.set_title('点绕点逆时针旋转', fontsize=18)
ax.set_xlim(1, 6)
ax.set_ylim(1, 6)
ax.set_aspect('equal')
ax.legend()
plt.tight_layout()
plt.savefig('line_point_rotate.svg', format='svg')
plt.close()

# 4. 两直线平行
fig, ax = plt.subplots(figsize=(5, 5))
A = np.array([1, 1])
B = np.array([5, 3])
C = np.array([1, 3])
D = np.array([5, 5])
ax.plot([A[0], B[0]], [A[1], B[1]], 'b-', label='直线AB')
ax.plot([C[0], D[0]], [C[1], D[1]], 'g-', label='直线CD')
ax.text(A[0], A[1]-0.3, 'A', color='blue', fontsize=16, ha='center')
ax.text(B[0], B[1]+0.2, 'B', color='blue', fontsize=16, ha='center')
ax.text(C[0], C[1]-0.3, 'C', color='green', fontsize=16, ha='center')
ax.text(D[0], D[1]+0.2, 'D', color='green', fontsize=16, ha='center')
ax.set_title('两直线平行', fontsize=18)
ax.set_xlim(0, 6)
ax.set_ylim(0, 6)
ax.set_aspect('equal')
ax.legend()
plt.tight_layout()
plt.savefig('line_point_parallel.svg', format='svg')
plt.close()

# 5. 两直线交点（面积比较法直观版）
fig, ax = plt.subplots(figsize=(8, 8))
A = np.array([1, 1])
B = np.array([5, 4])  # B点往下放
C = np.array([1, 4])  # C点往下放
D = np.array([5, 2])
slope1 = (B - A)
slope2 = (D - C)
A_mat = np.array([slope1, -slope2]).T
b_vec = C - A
sol = np.linalg.solve(A_mat, b_vec)
t = sol[0]
P = A + t * slope1

# 画直线AB, CD
ax.plot([A[0], B[0]], [A[1], B[1]], 'b-', linewidth=2, label='直线AB')
ax.plot([C[0], D[0]], [C[1], D[1]], 'g-', linewidth=2, label='直线CD')

# 标注点
ax.plot(A[0], A[1], 'bo', markersize=8)
ax.plot(B[0], B[1], 'bo', markersize=8)
ax.plot(C[0], C[1], 'go', markersize=8)
ax.plot(D[0], D[1], 'go', markersize=8)
ax.plot(P[0], P[1], 'ko', markersize=10, label='交点P')

# 点标签
ax.text(A[0]-0.3, A[1]-0.3, 'A', color='blue', fontsize=16, weight='bold')
ax.text(B[0]+0.2, B[1]-0.3, 'B', color='blue', fontsize=16, weight='bold')  # B标签往下
ax.text(C[0]-0.3, C[1]-0.3, 'C', color='green', fontsize=16, weight='bold')  # C标签往下
ax.text(D[0]+0.2, D[1]-0.3, 'D', color='green', fontsize=16, weight='bold')
ax.text(P[0]+0.2, P[1]+0.1, 'P', color='red', fontsize=18, weight='bold')

# 分子面积：三角形ACD的面积（叉积的一半）
triangle1 = np.array([A, C, D])
ax.fill(triangle1[:,0], triangle1[:,1], color='yellow', alpha=0.7, label='分子面积')

# 分母面积：四边形ADBC的面积（叉积的一半）
quad = np.array([A, D, B, C])
ax.fill(quad[:,0], quad[:,1], color='white', alpha=0.5, hatch='///', edgecolor='blue', label='分母面积')

# 向量标注
ax.annotate('', xy=B, xytext=A, arrowprops=dict(arrowstyle='->', color='blue', lw=2), annotation_clip=False)
ax.annotate('', xy=D, xytext=C, arrowprops=dict(arrowstyle='->', color='green', lw=2), annotation_clip=False)

# 公式和说明（文字往上挤）
ax.text(0.5, 5.8, r'$t = \frac{(A-C) \times (D-C)}{(B-A) \times (D-C)}$', fontsize=16, color='black', weight='bold')
ax.text(0.5, 5.4, '分子面积的一半，三角形ACD', fontsize=14, color='orange', weight='bold')
ax.text(0.5, 5.0, '分母面积的一半，四边形ADBC', fontsize=14, color='blue', weight='bold')
ax.text(0.5, 4.6, '交点P在AB上的比例t = 面积比', fontsize=14, color='red', weight='bold')

ax.set_title('两直线交点的面积比较法', fontsize=20, weight='bold')
ax.set_xlim(0, 6.5)
ax.set_ylim(0, 6.5)
ax.set_aspect('equal')
ax.grid(True, alpha=0.3)
ax.legend(loc='upper right')
plt.tight_layout()
plt.savefig('line_point_cross.svg', format='svg', bbox_inches='tight')
plt.close()

# 6. 线段相交
fig, ax = plt.subplots(figsize=(5, 5))
A = np.array([1, 1])
B = np.array([5, 5])
C = np.array([1, 5])
D = np.array([5, 1])
ax.plot([A[0], B[0]], [A[1], B[1]], 'b-', label='线段AB')
ax.plot([C[0], D[0]], [C[1], D[1]], 'g-', label='线段CD')
ax.plot([3], [3], 'ro', label='交点')
ax.text(A[0], A[1]-0.3, 'A', color='blue', fontsize=16, ha='center')
ax.text(B[0], B[1]+0.2, 'B', color='blue', fontsize=16, ha='center')
ax.text(C[0], C[1]-0.3, 'C', color='green', fontsize=16, ha='center')
ax.text(D[0], D[1]+0.2, 'D', color='green', fontsize=16, ha='center')
ax.text(3.2, 3, 'P', color='red', fontsize=16)
ax.set_title('线段相交', fontsize=18)
ax.set_xlim(0, 6)
ax.set_ylim(0, 6)
ax.set_aspect('equal')
ax.legend()
plt.tight_layout()
plt.savefig('line_point_segcross.svg', format='svg')
plt.close()

# 7. 点到线段距离
fig, ax = plt.subplots(figsize=(5, 5))
A = np.array([1, 1])
B = np.array([5, 4])
P = np.array([2, 5])
# 线段AB
ax.plot([A[0], B[0]], [A[1], B[1]], 'b-', label='线段AB')
# 点P
ax.plot(P[0], P[1], 'ro', label='点P')
# 垂足
AB = B - A
AP = P - A
proj_len = np.dot(AP, AB) / np.linalg.norm(AB)
proj = A + proj_len * AB / np.linalg.norm(AB)
# 判断投影是否在线段上
on_seg = 0 <= proj_len <= np.linalg.norm(AB)
if on_seg:
    ax.plot([P[0], proj[0]], [P[1], proj[1]], 'g--', label='距离')
    ax.plot(proj[0], proj[1], 'go', label='垂足')
    ax.text(proj[0]-0.2, proj[1], 'H', color='green', fontsize=16)
else:
    # 取端点距离
    dA = np.linalg.norm(P-A)
    dB = np.linalg.norm(P-B)
    if dA < dB:
        ax.plot([P[0], A[0]], [P[1], A[1]], 'g--', label='距离')
        ax.text(A[0], A[1]-0.3, 'A', color='blue', fontsize=16, ha='center')
    else:
        ax.plot([P[0], B[0]], [P[1], B[1]], 'g--', label='距离')
        ax.text(B[0], B[1]+0.2, 'B', color='blue', fontsize=16, ha='center')
ax.plot(A[0], A[1], 'bo')
ax.plot(B[0], B[1], 'bo')
ax.text(P[0]+0.2, P[1], 'P', color='red', fontsize=16)
ax.set_title('点到线段距离', fontsize=18)
ax.set_xlim(0, 6)
ax.set_ylim(0, 6)
ax.set_aspect('equal')
ax.legend()
plt.tight_layout()
plt.savefig('line_point_dist2seg.svg', format='svg')
plt.close()
