/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true
*/
var isSameTree = function (p, q) {
  // Caso base: ambos árboles están vacíos
  if (!p && !q) return true

  // Uno de los árboles está vacío pero no el otro
  if (!p || !q) return false

  // Compara los valores del nodo actual
  if (p.val !== q.val) return false

  // Verifica recursivamente los subárboles izquierdo y derecho
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
