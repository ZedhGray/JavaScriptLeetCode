/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

var isHappy = function (n) {
  let seen = new Set()
  while (n !== 1) {
    sum = 0
    while (n > 0) {
      sum += (n % 10) * (n % 10)
      n = Math.floor(n / 10)
    }
    if (seen.has(sum)) {
      return false
    } else {
      seen.add(sum)
      n = sum
    }
  }
  return true
}
