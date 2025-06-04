import matplotlib.pyplot as plt
import networkx as nx
import matplotlib.patches as mpatches

NODE_SIZE = 5000
# 构建AC自动机的结构
nodes = [
    "root", "a", "s", "b", "s1", "p", "e", "c", "p1", "a1", "d", "x"
]
edges = [
    ("root", "a"), ("root", "s"), ("root", "b"),
    ("a", "s1"), ("s1", "p1"),
    ("s", "p"), ("p", "a1"), ("p", "e"),
    ("b", "c"), ("c", "d"),
    ("e", "x")
]
# 终止节点
terminal_nodes = {"p1", "a1", "d", "x"}

# 失配指针 (dashed)
fail_edges = [
    ("a", "root"),
    ("s", "root"),
    ("b", "root"),
    ("s1", "s"),
    ("p1", "p"),
    ("p", "root"),
    ("a1", "a"),
    ("e", "root"),
    ("c", "root"),
    ("d", "root"),
    ("x", "root"),
]

# 手动布局，避免交叉
pos = {
    "root": (0, 4),
    "a": (-2, 3),
    "s": (0, 3),
    "b": (2, 3),
    "s1": (-3, 2),
    "p1": (-3.5, 1),
    "p": (0, 2),
    "a1": (-1, 1),
    "e": (1, 1),
    "x": (1.5, 0),
    "c": (3, 2),
    "d": (3.5, 1),
}

G = nx.DiGraph()
G.add_nodes_from(nodes)
G.add_edges_from(edges)

plt.figure(figsize=(10, 7))
# 普通边
nx.draw_networkx_edges(G, pos, edgelist=edges, arrows=True, arrowstyle='-|>', width=2)
# 节点
nx.draw_networkx_nodes(G, pos, nodelist=nodes, node_color='white', edgecolors='black', node_size=NODE_SIZE)
nx.draw_networkx_nodes(G, pos, nodelist=terminal_nodes, node_color='greenyellow', edgecolors='black', node_size=NODE_SIZE)

# 标签映射：显示的字符
display_labels = {
    "root": "root",
    "a": "a",
    "s": "s",
    "b": "b",
    "s1": "s",
    "p": "p",
    "p1": "p",
    "a1": "a",
    "e": "e",
    "c": "c",
    "d": "d",
    "x": "x"
}

# 标签
nx.draw_networkx_labels(G, pos, labels=display_labels, font_size=32)

# 失配指针
ax = plt.gca()
for u, v in fail_edges:
    # 针对每条失配指针单独设置弧度，避免重叠
    if (u, v) == ("a", "root"):
        rad = -0.2
    elif (u, v) == ("s", "root"):
        rad = 0.2
    elif (u, v) == ("b", "root"):
        rad = 0.3
    elif (u, v) == ("s1", "s"):
        rad = -0.1
    elif (u, v) == ("p1", "p"):
        rad = -0.3
    elif (u, v) == ("p", "root"):
        rad = 0.4
    elif (u, v) == ("a1", "a"):
        rad = -0.2
    elif (u, v) == ("e", "root"):
        rad = 0.3
    elif (u, v) == ("c", "root"):
        rad = 0.5
    elif (u, v) == ("d", "root"):
        rad = 0.6
    elif (u, v) == ("x", "root"):
        rad = 0.4
    else:
        rad = 0.3

    src = pos[u]
    dst = pos[v]

    # 1. 画虚线（无箭头）
    arrow_line = mpatches.FancyArrowPatch(
        posA=src, posB=dst, connectionstyle=f"arc3,rad={rad}",
        arrowstyle='-', mutation_scale=30, color="blue", linewidth=2, linestyle="dashed"
    )
    ax.add_patch(arrow_line)

    # 2. 画短实线箭头（只在终点）
    # 计算终点方向的一个短向量
    alpha = 0.92  # 终点靠近dst
    inter = ((1 - alpha) * src[0] + alpha * dst[0], (1 - alpha) * src[1] + alpha * dst[1])
    arrow_head = mpatches.FancyArrowPatch(
        posA=inter, posB=dst, connectionstyle=f"arc3,rad={rad}",
        arrowstyle='-|>', mutation_scale=30, color="blue", linewidth=2
    )
    ax.add_patch(arrow_head)

plt.axis('off')
plt.tight_layout()
plt.savefig('ac自动机.svg', format='svg')
# plt.show()
