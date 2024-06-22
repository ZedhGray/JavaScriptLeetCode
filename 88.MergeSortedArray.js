/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/
function merge(nums1, m, nums2, n) {
  // Definimos los punteros para nums1 y nums2, comenzando desde el final de nums1 y el principio de nums2
  let i = m - 1
  let j = n - 1

  // Iteramos hacia atrás a través de nums2, comparando cada elemento con el correspondiente en nums1
  for (let k = m + n - 1; j >= 0; k--) {
    // Si hay elementos en nums1 que aún no hemos revisado y son mayores que el elemento actual en nums2,
    // colocamos ese elemento mayor en la posición actual de nums1 y avanzamos el puntero de nums1
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      // De lo contrario, simplemente colocamos el elemento de nums2 en la posición actual de nums1 y avanzamos el puntero de nums2
      nums1[k] = nums2[j]
      j--
    }
  }
}

// Ejemplo de uso:
let nums1 = [1, 2, 3, 0, 0, 0] // Array original de nums1
let m = 3 // Número de elementos en nums1 antes de la fusión
let nums2 = [2, 5, 6] // Array de nums2 a fusionar
let n = 3 // Número de elementos en nums2

merge(nums1, m, nums2, n)

console.log(nums1) // Imprime el resultado: [1, 2, 2, 3, 5, 6]
