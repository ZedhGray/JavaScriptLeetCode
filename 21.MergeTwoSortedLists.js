/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
*/
function mergeTwoLists(list1, list2) {
  // Step 1: Create a new dummy node
  const dummy = new ListNode(-1)
  let current = dummy // Step 2: Initialize current to the dummy node

  // While both lists have elements
  while (list1 !== null && list2 !== null) {
    // Step 3: Compare the values and append the smaller one to the merged list
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next // Move the pointer of list1 one step forward
    } else {
      current.next = list2
      list2 = list2.next // Move the pointer of list2 one step forward
    }
    current = current.next // Move the current pointer one step forward
  }

  // Step 4: Append the remaining elements of list1 or list2
  if (list1 !== null) {
    current.next = list1
  } else {
    current.next = list2
  }

  // Step 5: Return the head of the merged list
  return dummy.next
}
