/**
 * Given a string s, find the length of the longest substring
   without repeating characters.
 */

var lengthOfLongestSubstring = function (s) {
  let map = {}
  let maxLength = 0
  let left = 0

  for (let right = 0; right < s.length; right++) {
    if (map[s[right]] !== undefined) {
      left = Math.max(left, map[s[right]] + 1)
    }
    map[s[right]] = right
    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}
