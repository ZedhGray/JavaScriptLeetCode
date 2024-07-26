/*
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
*/
var reverseStr = function (s, k) {
  let arr = s.split('')
  for (let start = 0; start < arr.length; start += 2 * k) {
    let i = start
    let j = Math.min(start + k - 1, arr.length - 1)
    while (i < j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j--
    }
  }
  return arr.join('')
}
let s = 'onetwoten'
let k = 3
console.log(reverseStr(s, k))
