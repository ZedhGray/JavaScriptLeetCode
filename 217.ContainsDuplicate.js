/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true
*/
var containsDuplicate = function (nums) {
  let check = false
  let x = nums.sort((a, b) => b - a)
  for (let i = 0; i < x.length; i++) {
    if (x[i] == x[i + 1]) {
      check = true
    }
  }
  return check
}
nums = [1, 2, 3, 1]
console.log(containsDuplicate(nums))
