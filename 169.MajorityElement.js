/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/
var majorityElement = function (nums) {
  let count = {}
  nums = nums.sort((a, b) => a - b)
  nums.forEach((num) => {
    count[num] = (count[num] || 0) + 1
  })
  let mostFrequentElement = null
  let maxCount = 0

  for (const num in count) {
    if (count[num] > maxCount) {
      maxCount = count[num]
      mostFrequentElement = num
    }
  }
  return mostFrequentElement
}
