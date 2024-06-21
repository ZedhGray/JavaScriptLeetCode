/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/
var deleteDuplicates = function (head) {
  let currentNode = head
  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next
    } else {
      currentNode = currentNode.next
    }
  }
  return head
}
