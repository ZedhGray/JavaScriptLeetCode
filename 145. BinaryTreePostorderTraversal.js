/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.
*/
var postorderTraversal = function (root) {
  const result = []
  function recurse(node) {
    if (!node) return
    recurse(node.left)
    recurse(node.right)
    result.push(node.val)
  }
  recurse(root)
  return result
}
