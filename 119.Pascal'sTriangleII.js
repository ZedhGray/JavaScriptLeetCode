/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/
var getRow = function (rowIndex) {
  let triangle = [[1]]
  let row = [1]
  for (let i = 1; i < rowIndex + 1; i++) {
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
   // console.log(row)
  }
  return triangle[rowIndex]
}
console.log(getRow(3))
