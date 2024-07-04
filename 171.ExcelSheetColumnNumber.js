/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
*/
var titleToNumber = function (columnTitle) {
  // A -> (0*26) + (65-64), B-> (1*26) + (66-64), C -> (28*26) + (67-64)
  let sum = 0
  for (let i = 0; i < columnTitle.length; i++) {
    sum = sum * 26 + (columnTitle.charCodeAt(i) - 64)
  }
  return sum
}
