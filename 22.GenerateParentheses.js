/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 
*/
// Función para generar todas las combinaciones de paréntesis bien formadas
// Función para generar todas las combinaciones de paréntesis bien formadas
var generateParenthesis = function (n) {
  const result = []
  function backtrack(result, current, open, close, max) {
    if (current.length === max * 2) {
      // If the current string has reached the maximum length
      result.push(current) // Add the current combination to the result
      return // Stop further exploration for this branch
    }

    if (open < max) {
      // If there are still open parentheses left to add
      backtrack(result, current + '(', open + 1, close, max) // Explore adding an opening parenthesis
    }
    if (close < open) {
      // If there are still closing parentheses left to add
      backtrack(result, current + ')', open, close + 1, max) // Explore adding a closing parenthesis
    }
  }
  backtrack(result, '', 0, 0, n)
  return result
}

// Example usage:
console.log(generateParentheses(3)) // Output: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParentheses(1)) // Output: ["()"]
