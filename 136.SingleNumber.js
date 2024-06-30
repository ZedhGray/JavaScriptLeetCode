/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/
/*
var singleNumber = function (nums) {
  let count = {}
  nums.forEach((num) => {
    if (count[num]) {
      count[num]++
    } else {
      count[num] = 1
    }
  })
  let Unique = Object.keys(count).filter((key) => count[key] === 1)

  let result = Unique[0]
  return result
}
*/
var singleNumber = function (nums) {
  let result = 0
  for (let num of nums) {
    result ^= num
    console.log(result)
  }
  return result
}
let nums = [4, 1, 2, 1, 2]
singleNumber(nums)
