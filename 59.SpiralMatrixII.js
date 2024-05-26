// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Constraints:

// 1 <= n <= 20

function generateMatrix(n) {
    // Create the empty matrix
    const matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push([]);
    }
  
    // Define the boundaries
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
  
    // Initialize the counter
    let counter = 1;
  
    // Generate the matrix in spiral order
    while (top <= bottom && left <= right) {
      // Generate the top row
      for (let i = left; i <= right; i++) {
        matrix[top][i] = counter++;
      }
      top++;
  
      // Generate the right column
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = counter++;
      }
      right--;
  
      // Generate the bottom row
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = counter++;
      }
      bottom--;
  
      // Generate the left column
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = counter++;
      }
      left++;
    }
  
    return matrix;
  }
  
  // Example usage
  const n = 4;
  const matrix = generateMatrix(n);
  console.log(matrix);
  