//Dado un número romano, conviértelo en un número entero.
// Por ejemplo,  2 se escribe como II en números romanos, solo se suman dos unidades. 12se escribe como  XII, que es simplemente X + II. El número 27 se escribe como XXVII, que es XX + V + II.

// Los números romanos generalmente se escriben de mayor a menor de izquierda a derecha. Sin embargo, el número para cuatro no es IIII. En cambio, el número cuatro se escribe como IV. Como el uno está antes que el cinco lo restamos haciendo cuatro. El mismo principio se aplica al número nueve, que se escribe como IX. Hay seis casos en los que se usa la resta:

// Ise puede colocar antes de V(5) y X(10) para hacer 4 y 9.
// Xse puede colocar antes de L(50) y C(100) para hacer 40 y 90.
// Cse puede colocar antes de D(500) y M(1000) para hacer 400 y 900.
// Dado un número romano, conviértelo en un número entero.
function convertirCaracterAEntero(caracter) {
  switch (caracter) {
    case 'I':
      return 1
    case 'V':
      return 5
    case 'X':
      return 10
    case 'L':
      return 50
    case 'C':
      return 100
    case 'D':
      return 500
    case 'M':
      return 1000
    default:
      return -1
  }
}
function romanToInt(romano) {
  if (typeof romano != 'string') {
    return null
  }

  let numero = convertirCaracterAEntero(romano.charAt(0))
  let anterior
  let actual

  for (let i = 1; i < romano.length; i++) {
    actual = convertirCaracterAEntero(romano.charAt(i))
    anterior = convertirCaracterAEntero(romano.charAt(i - 1))

    if (actual <= anterior) {
      numero += actual
    } else {
      numero = numero - anterior * 2 + actual
    }
  }
  return numero
}
console.log(romanToInt('III')) // Output: 3

console.log(romanToInt('IX')) // Output: 9
