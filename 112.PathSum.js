/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.
*/
var hasPathSum = function (root, targetSum) {
  function recurse(root, currSum) {
    if (!root) return false
    currSum += root.val

    if (!root.left && !root.right) {
      return currSum === targetSum
    }
    return recurse(root.left, currSum) || recurse(root.right, currSum)
  }
  return recurse(root, 0)
}
