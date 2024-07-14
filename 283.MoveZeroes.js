/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/
var moveZeroes = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i]
      count++
    }
  }
  while (count < nums.length) {
    nums[count++] = 0
  }
  return nums
}

nums = [0, 0, 1]
console.log(moveZeroes(nums))
