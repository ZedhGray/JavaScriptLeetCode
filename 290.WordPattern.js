/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
*/

var wordPattern = function (pattern, s) {
  const mapCharToWord = {}
  const mapWordToChar = {}

  pattern = pattern.split('')
  s = s.split(' ')

  if (pattern.length != s.length) return false
  for (let i = 0; i < s.length; i++) {
    let curWord = s[i]
    let curLetter = pattern[i]

    if (
      mapCharToWord[curLetter] !== undefined &&
      mapCharToWord[curLetter] !== curWord
    )
      return false
    if (
      mapWordToChar[curWord] !== undefined &&
      mapWordToChar[curWord] !== curLetter
    )
      return false
    mapWordToChar[curWord] = curLetter
    mapCharToWord[curLetter] = curWord
  }
  return true
}
let pattern = 'e'
let s = 'eukera'
console.log(wordPattern(pattern, s))
