// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function (l1, l2) {
  var dummyHead = new ListNode(0)
  var curr = dummyHead
  var carry = 0
  while (l1 || l2) {
    var x = l1 ? l1.val : 0
    var y = l2 ? l2.val : 0
    var sum = carry + x + y
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (carry > 0) {
    curr.next = new ListNode(carry)
  }
  return dummyHead.next
}
