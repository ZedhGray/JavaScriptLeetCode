/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.
*/
var isPowerOfTwo = function (n) {
  let check = false
  for (let i = 0; i < 32; i++) {
    if (Math.pow(2, i) == n) {
      check = true
      break
    }
  }
  return check
}
let n = 2097152
console.log(isPowerOfTwo(n))
