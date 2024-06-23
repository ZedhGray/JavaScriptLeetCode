/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
*/
var inorderTraversal = function (root) {
  // Base case: if the root is null, return an empty array
  if (root === null) {
    return []
  }

  // Recursively traverse the left subtree
  let left = inorderTraversal(root.left)

  // Add the current node's value to the result
  let result = [...left, root.val, ...inorderTraversal(root.right)]

  return result
}
