/*
A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
Given an integer n, return true if n is a perfect number, otherwise return false.
Example 1:
Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.
*/

var checkPerfectNumber = function (num) {
  if (num <= 1) {
    return false 
  }
  let sum = 1
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      if (i * i !== num) {
        sum += i + num / i
      } else {
        sum += i 
      }
    }
  }
  return sum === num
}

let num = 28
console.log(checkPerfectNumber(num))
