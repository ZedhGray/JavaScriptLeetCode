/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
*/

var nextGreatestLetter = function (letters, target) {
  let result = 0
  let duplicates = [...new Set(letters)]
  if (!duplicates.includes(target)) {
    duplicates.push(target)
  }
  duplicates.sort()
  for (let i = 0; i < duplicates.length; i++) {
    if (duplicates[i] == target && duplicates[i + 1] != null) {
      result = duplicates[i + 1]
    }
  }
  if (result == 0) {
    duplicates = duplicates.filter((letter) => letter !== target)
    result = duplicates[0]
  }
  return result
}
let letters = ['c', 'f', 'j']
target = 'j'
console.log(nextGreatestLetter(letters, target))
