/*
You are given a string s that consists of lower case English letters and brackets.
Reverse the strings in each pair of matching parentheses, starting from the innermost one.
Your result should not contain any brackets.
*/
var reverseParentheses = function (s) {
  let stack = []
  let result = ''
  let tempStack = []

  // Paso 1: Inicialización
  let start = 0
  let end = 0

  // Paso 2: Búsqueda de Pares de Paréntesis
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      start = i + 1 // El siguiente carácter es el inicio de la subcadena
      stack.push(i) // Guardamos el índice del paréntesis abierto
    } else if (s[i] === ')') {
      end = i - 1 // El carácter anterior es el final de la subcadena
      stack.pop() // Eliminamos el índice del paréntesis cerrado

      // Paso 3: Reversión de Subcadenas
      while (stack.length > 0 && start <= end) {
        let index = stack[stack.length - 1]
        tempStack.push(
          ...s
            .slice(index + 1, end)
            .split('')
            .reverse()
            .join('')
        )
        end--
      }

      // Paso 4: Eliminación de Corchetes
      result += tempStack.join('')
      tempStack = []
    }
  }

  return result
}

let s = '(ed(et(oc))el)'
console.log(reverseParentheses(s))
