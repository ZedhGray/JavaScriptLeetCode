/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
*/

function addBinary(a, b) {
  // Convertir las cadenas binarias 'a' y 'b' a enteros
  const intA = parseInt(a, 2) // Convierte la cadena binaria 'a' a un entero
  const intB = parseInt(b, 2) // Convierte la cadena binaria 'b' a un entero

  // Sumar los enteros
  const sum = intA + intB // Realiza la suma de los enteros obtenidos

  // Convertir la suma de nuevo a una cadena binaria
  const result = sum.toString(2) // Convierte el resultado de la suma a una cadena binaria

  // Asegurar que el resultado tenga ceros al principio si es necesario
  // Por ejemplo, para entradas como "111" + "1", necesitamos asegurarnos de que el resultado tenga la longitud correcta
  return result.padStart(Math.max(a.length, b.length), '0') // Ajusta la longitud de la cadena resultante para incluir ceros al principio si es necesario
}

// Ejemplo de uso:
console.log(addBinary('11', '1')) // Salida: "100"
console.log(addBinary('1010', '1011')) // Salida: "10101"
