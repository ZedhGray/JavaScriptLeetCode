/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/
/*
var isValid = function (s) {
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '{' && s[i + 1] != '}') {
      return false
    }
    if (s[i] === '(' && s[i + 1] != ')') {
      return false
    }
    if (s[i] === '[' && s[i + 1] != ']') {
      return false
    }
  }
  return true
}
*/
// tomamos el primer caracter y comparamos de uno por uno cada letra, si encontramos un que la complete la tomamos y la eliminamos
// continuamos con elsiguiente hasta quedarnos sin array si al final no hay numeros damos true
// si al final no encontramos el relleno de uno damos false

function isValid(s) {
  // Crear un array vacío para usar como pila (stack)
  const stack = []
  // Mapeo de los corchetes de cierre a sus correspondientes corchetes de apertura
  const pairs = { ')': '(', '}': '{', ']': '[' }

  // Iterar sobre cada carácter de la cadena s
  for (let char of s) {
    // Si el carácter es un corchete de cierre
    if (pairs[char]) {
      // Verificar si la pila está vacía o el elemento superior de la pila no coincide con el corchete de apertura correspondiente
      if (!stack.length || stack[stack.length - 1] !== pairs[char]) {
        // La cadena no es válida si alguna de estas condiciones se cumple
        return false
      }
      // Eliminar el corchete de apertura coincidente de la pila
      stack.pop()
    } else {
      // Si el carácter es un corchete de apertura, agregarlo a la pila
      stack.push(char)
    }
  }

  // Devolver verdadero si la pila está vacía al final, lo que indica que todos los corchetes fueron emparejados correctamente y en orden
  return !stack.length
}

// Ejemplo de uso:
console.log(isValid('()[]{}')) // Debería imprimir: true
console.log('([)]') // Debería imprimir: false
