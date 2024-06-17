/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.
 */
var lengthOfLastWord = function (s) {
  s = s.trim()
  const ult = s.lastIndexOf(' ')
  const subText = s.substring(ult + 1)
  return subText.length
}

console.log(lengthOfLastWord('Hello World'))
