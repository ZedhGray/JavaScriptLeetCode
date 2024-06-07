/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
*/
var fourSum = function (nums, target) {
  const result = [] // Array para almacenar los cuartetos únicos

  // Verificar si la longitud del array es menor a 4
  if (nums.length < 4) return result

  // Ordenar el array en orden ascendente
  nums.sort((a, b) => a - b)

  // Bucle externo desde 0 hasta el penúltimo elemento
  for (let i = 0; i < nums.length - 3; i++) {
    // Saltar el elemento si es el mismo que el anterior para evitar duplicados
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // Bucle interno desde i+1 hasta el penúltimo elemento
    for (let j = i + 1; j < nums.length - 2; j++) {
      // Saltar el elemento si es el mismo que el anterior para evitar duplicados
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      // Inicializar el puntero izquierdo
      let left = j + 1
      // Inicializar el puntero derecho
      let right = nums.length - 1

      while (left < right) {
        // Calcular la suma de 4 elementos
        const sum = nums[i] + nums[j] + nums[left] + nums[right]

        if (sum === target) {
          // Si la suma es igual al objetivo, agregar los elementos al resultado
          result.push([nums[i], nums[j], nums[left], nums[right]])

          // Saltar los elementos duplicados
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        } else if (sum < target) {
          left++ // Incrementar el puntero izquierdo
        } else {
          right-- // Decrementar el puntero derecho
        }
      }
    }
  }

  return result
}
