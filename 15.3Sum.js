/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/
// Definimos la función threeSum que toma un arreglo de números como entrada
var threeSum = function (nums) {
  // Creamos un arreglo vacío llamado result donde almacenaremos nuestros resultados
  const result = []

  // Utilizamos el método sort() para ordenar el arreglo nums en orden ascendente
  // Pasamos una función de comparación que compara dos elementos a la vez
  nums.sort((a, b) => a - b)

  // Comenzamos un bucle for desde el inicio del arreglo hasta el penúltimo elemento
  // Esto evita considerar el último elemento como posible primer elemento de un triplete
  for (let i = 0; i < nums.length - 2; i++) {
    // Verificamos si el elemento actual es igual al anterior
    // Si es así, continuamos al siguiente ciclo para evitar duplicados
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // Inicializamos dos punteros, left y right, justo después y justo antes del elemento actual
    let left = i + 1
    let right = nums.length - 1

    // Comenzamos un bucle while que continúa mientras left sea menor que right
    while (left < right) {
      // Calculamos la suma de los tres elementos actuales
      const total = nums[i] + nums[left] + nums[right]

      // Si la suma es exactamente cero, hemos encontrado un triplete válido
      if (total === 0) {
        // Agregamos el triplete encontrado al arreglo result
        result.push([nums[i], nums[left], nums[right]])

        // Avanzamos ambos punteros para evitar duplicados
        // Moveremos solo si hay diferencias entre los elementos adyacentes
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--

        // Incrementamos y decrementamos los punteros para avanzar en la búsqueda
        left++
        right--
      } else if (total < 0) {
        // Si la suma es menor que cero, incrementamos el puntero izquierdo para aumentar la suma
        left++
      } else {
        // Si la suma es mayor que cero, decrementamos el puntero derecho para disminuir la suma
        right--
      }
    }
  }

  // Al final, retornamos el arreglo result que contiene todos los trípletos únicos que suman cero
  return result
}
