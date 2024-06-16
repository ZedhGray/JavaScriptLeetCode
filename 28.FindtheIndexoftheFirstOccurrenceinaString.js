/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 
*/
var strStr = function (haystack, needle) {
  if (haystack.includes(needle)) {
    let startIndex = haystack.indexOf(needle)
    return startIndex
  } else {
    return -1
  }
}
