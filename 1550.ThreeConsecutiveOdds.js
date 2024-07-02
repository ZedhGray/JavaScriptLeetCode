/*
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
*/
var threeConsecutiveOdds = function (arr) {
  let checker = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      checker++
    } else {
      checker = 0
    }
    if (checker === 3) return true
  }
  return false
}

