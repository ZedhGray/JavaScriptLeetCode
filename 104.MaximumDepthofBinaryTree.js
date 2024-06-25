/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:
Input: root = [1,null,2]
Output: 2
 */
var maxDepth = function (root) {
  if (!root) return 0

  // Recursively find the maximum depth of the left and right subtrees
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  // Return the maximum depth found so far plus one for the current level
  return Math.max(leftDepth, rightDepth) + 1
}
