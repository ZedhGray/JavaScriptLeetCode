/*
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.
*/
var detectCapitalUse = function (word) {
  if (word === word.toUpperCase()) {
    return true
  }
  if (word === word.toLowerCase()) {
    return true
  }

  let letters = Array.from(word)
  let check = false

  if (letters[0] == letters[0].toUpperCase()) {
    for (let i = 1; i < letters.length; i++) {
      if (letters[i] !== letters[i].toLowerCase()) {
        return check
      }
    }
    check = true
  }
  return check
}
let word = 'ffffffffffffffffffffF'
console.log(detectCapitalUse(word))
