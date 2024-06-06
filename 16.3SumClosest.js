/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
*/

var threeSumClosest = function (nums, target) {
  // Utilizamos el método sort() para ordenar el arreglo nums en orden ascendente
  // Pasamos una función de comparación que compara dos elementos a la vez
  nums.sort((a, b) => a - b)

  // Inicializamos variables para almacenar la suma más cercana encontrada y el triplete correspondiente.
  // La suma más cercana comienza siendo infinita, asegurando que cualquier suma válida será más cercana.
  let closestSum = Infinity
  let result
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
      const currentSum = nums[i] + nums[left] + nums[right]
      // Comparamos la diferencia absoluta entre la suma actual y el target con la diferencia absoluta entre la suma más cercana encontrada y el target.
      // Si la suma actual es más cercana a target, actualizamos la suma más cercana y el triplete correspondiente.
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum
        result = [nums[i], nums[left], nums[right]]
      }
      // Si la suma actual es exactamente igual a target, salimos del bucle early, ya que hemos encontrado un triplete exacto.
      if (currentSum === target) break
      // Si la suma actual es menor que target, intentamos aumentarla moviendo el puntero izquierdo hacia adelante.
      else if (currentSum < target) left++
      // Si la suma actual es mayor que target, intentamos disminuirla moviendo el puntero derecho hacia atrás.
      else right--
    }
  }

  // Una vez que hemos iterado sobre todo el arreglo, devolvemos la suma del triplete más cercano a target.
  // Esto significa que hemos encontrado el triplete más cercano a target y ahora queremos saber cuál es esa suma.
  return result[0] + result[1] + result[2]
}
