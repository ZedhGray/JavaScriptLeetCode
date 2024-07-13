/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/
var missingNumber = function (nums) {
  let result = 0
  let order = nums.sort((a, b) => a - b)
  let n = order.length
  function crearArrayHastaN(n) {
    return Array.from({ length: n + 1 }, (_, i) => i)
  }
  let secundArray = crearArrayHastaN(n)
  console.log(secundArray)
  console.log(order)
  for (let i = 0; i < secundArray.length; i++) {
    if (order[i] !== secundArray[i]) {
      result = secundArray[i]
      break
    }
  }
  return result
}
nums = [3, 0, 1]
console.log(missingNumber(nums))
