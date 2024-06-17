/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/
var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    let startIndex = nums.indexOf(target)
    return startIndex
  } else {
    nums.push(target)
    nums.sort((a, b) => a - b)
    if (nums.includes(target)) {
      let startIndex = nums.indexOf(target)
      return startIndex
    }
  }
}
