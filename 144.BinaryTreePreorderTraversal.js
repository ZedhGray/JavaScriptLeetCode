/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.
*/
var preorderTraversal = function (root) {
  const result = []
  function recurse(node) {
    if (!node) return
    result.push(node.val)
    recurse(node.left)
    recurse(node.right)
  }
  recurse(root)
  return result
}
