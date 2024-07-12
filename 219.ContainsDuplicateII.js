/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
*/
var contieneDuplicadoCercano = function (nums, k) {
  const indexMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (indexMap.has(nums[i])) {
      const prevIndex = indexMap.get(nums[i])
      if (i - prevIndex <= k) {
        return true
      }
    }
    indexMap.set(nums[i], i)
  }
  return false
}

let nums = [1, 2, 3, 1, 2, 3]
console.log(contieneDuplicadoCercano(nums, 2)) // Output: false
