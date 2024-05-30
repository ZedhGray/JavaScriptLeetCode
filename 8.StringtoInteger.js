/**
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.
 */

var myAtoi = function (s) {
  let i = 0
  // Paso 1: Ignorar los espacios en blanco al inicio
  while (i < s.length && /\s/.test(s.charAt(i))) {
    i++
  }

  // Paso 2: Determinar el signo
  let isNegative = false
  if (i < s.length) {
    const c = s.charAt(i)
    if (c === '-') {
      isNegative = true
      i++
    } else if (c === '+') {
      i++ // Avanzar después del signo '+'
    }
  }

  // Paso 3: Convertir la parte entera del número
  let num = 0
  while (i < s.length && s.charAt(i).match(/\d/)) {
    num = num * 10 + parseInt(s.charAt(i))
    i++
  }

  // Paso 4: Manejar el redondeo para evitar desbordamientos
  if (num > Math.pow(2, 31) - 1) {
    num = Math.pow(2, 31) // Redondear hacia abajo para números positivos
  } else if (num < -Math.pow(2, 31)) {
    num = -Math.pow(2, 31 + 1) // Redondear hacia abajo para números negativos
  }

  // Paso 5: Devolver el resultado
  return isNegative ? -num : num
}
