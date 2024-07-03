/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
Ejemplo 1:

Entrada: nums1 = [1,2,2,1], nums2 = [2,2]
 Salida: [2,2]
Ejemplo 2:

Entrada: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 Salida: [4,9]
 Explicación: [9,4] también se acepta.
 
*/
var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)

  let i = 0
  let j = 0
  let returnArray = []

  while (j < nums2.length && i < nums1.length) {
    if (nums1[i] === nums2[j]) {
      returnArray.push(nums1[i])
      i++
      j++
    } else if (nums1[i] > nums2[j]) {
      j++
    } else {
      i++
    }
  }

  return returnArray
}
