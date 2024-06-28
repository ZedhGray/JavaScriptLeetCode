/*
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.
*/
var minDepth = function (root) {
  if (!root) return 0
  function depth(node) {
    if (!node.left && !node.right) return 1
    if (node.left && !node.right) return depth(node.left) + 1
    if (!node.left && node.right) return depth(node.right) + 1
    const leftDepth = depth(node.left) + 1
    const rightDepth = depth(node.right) + 1

    return Math.min(leftDepth, rightDepth)
  }
  return depth(root)
}
