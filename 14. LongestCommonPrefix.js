// Escriba una función para encontrar la cadena de prefijo común más larga entre una matriz de cadenas.

// Si no hay un prefijo común, devuelve una cadena vacía "".

// Ejemplo 1:
// Entrada: strs = ["flor","flujo","vuelo"]
//  Salida: "fl"

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      console.log('Prefix is currently' + prefix)
    }
  }
  return prefix
}
