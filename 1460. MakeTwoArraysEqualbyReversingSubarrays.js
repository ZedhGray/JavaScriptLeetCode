/*
You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.

Return true if you can make arr equal to target or false otherwise.
*/
var canBeEqual = function (target, arr) {
  if (JSON.stringify(target) === JSON.stringify(arr)) return true
  // Ordena el segundo arreglo y compáralo con el primer arreglo
  const sortedTarget = [...target].sort((a, b) => a - b)
  const sortedArr = [...arr].sort((a, b) => a - b)

  // Convierte los arreglos a cadenas JSON y compáralas
  return JSON.stringify(sortedTarget) === JSON.stringify(sortedArr)
}

let target = [392, 360]
let arr = [392, 360]

console.log(canBeEqual(target, arr))
