//Dada una matriz de números enteros y un objetivo entero, devuelva los índices de los dos números para que se sumen en el objetivo.
//Puede suponer que cada entrada tendría exactamente una solución y no puede usar el mismo elemento dos veces.
//Puede devolver la respuesta en cualquier orden.

var twoSum = function (nums, target) {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const missingNum = target - num

    if (missingNum in obj) {
      return [obj[missingNum], i]
    }
    obj[num] = i
    //console.log('obj', obj)
  }
}
