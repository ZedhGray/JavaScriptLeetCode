/**
 * Given a string s, return the longest palindromic substring in s.
 */

var longestPalindrome = function (s) {
  if (s.length < 1) return ''

  let maxSubStart = 0
  let maxSubLength = 0

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i) // Expansión simétrica alrededor de un carácter único
    let len2 = expandAroundCenter(s, i, i + 1) // Expansión simétrica alrededor de una pareja de caracteres
    let len = Math.max(len1, len2)

    if (len > maxSubLength) {
      maxSubStart = i - (((len - 1) / 2) | 0)
      maxSubLength = len
    }
  }

  return s.substring(maxSubStart, maxSubStart + maxSubLength)
}

function expandAroundCenter(s, left, right) {
  let L = left,
    R = right
  while (L >= 0 && R < s.length && s[L] === s[R]) {
    L--
    R++
  }
  return R - L - 1
}
