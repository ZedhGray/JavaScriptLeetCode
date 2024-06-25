/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true
*/
var isSymmetric = function (root) {
  function recurse(l, r) {
    if (!l && !r) return true
    if (!l || !r || l.val !== r.val) return false

    return recurse(l.left, r.right) && recurse(l.right, r.left)
  }
  return recurse(root.left, root.right)
}
