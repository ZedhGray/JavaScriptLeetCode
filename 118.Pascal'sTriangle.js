/*
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:
Input: numRows = 1
Output: [[1]]
 
*/
var generate = function (numRows) {
  let triangle = [[1]]
  let row = [1]
  for (let i = 1; i < numRows; i++) {
    let newRow = []
    for (let j = 0; j <= i; j++) {
      // Cada elemento es la suma de los dos elementos superiores adyacentes
      if (j === 0 || j === i) {
        newRow[j] = 1
      } else {
        newRow[j] = row[j - 1] + row[j]
      }
    }
    row = newRow
    triangle.push(row)
    console.log(row)
  }
  return triangle
}
generate(5)