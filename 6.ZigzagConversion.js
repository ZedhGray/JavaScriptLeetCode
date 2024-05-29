/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 * 
 */

function convert(s, numRows) {
  if (numRows === 1 || s.length < numRows) {
    return s
  }
  let rows = []
  let currentRow = 0
  let reverse = false
  let result = ''

  for (let i = 0; i < numRows; i++) {
    rows[i] = []
  }

  for (let i = 0; i < s.length; i++) {
    rows[currentRow].push(s[i])
    if (reverse === false) {
      currentRow++
    } else {
      currentRow--
    }

    if (currentRow === numRows - 1 || currentRow === 0) {
      reverse = !reverse
    }
  }

  rows.forEach((row) => {
    result += row.join('')
  })

  return result
}
