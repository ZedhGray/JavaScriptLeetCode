/*
Given an integer x, return true if x is a  palindrome ,and false otherwise.
*/

var isPalindrome = function (x) {
  let y = String(x)
  let strInvert = y.split('').reverse().join('')
  if (y === strInvert) return true
  return false
}
