/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    // Intercambiamos para asegurarnos de que nums1 siempre sea el arreglo más pequeño
    const temp = nums1
    nums1 = nums2
    nums2 = temp
  }
  let x = nums1.length
  let y = nums2.length

  // Aseguramos que nums1 siempre sea el arreglo más pequeño
  if (x === 0)
    return y % 2 === 0
      ? (nums2[y >> 1] + nums2[(y - 1) >> 1]) / 2
      : nums2[Math.floor(y / 2)]

  let low = 0
  let high = x

  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2)
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX

    let maxLeftX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
    let minRightX =
      partitionX === x ? Number.POSITIVE_INFINITY : nums1[partitionX]

    let maxLeftY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]
    let minRightY =
      partitionY === y ? Number.POSITIVE_INFINITY : nums2[partitionY]

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        )
      } else {
        return Math.max(maxLeftX, maxLeftY)
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1
    } else {
      low = partitionX + 1
    }
  }

  throw new Error('No debería llegar aquí')
}
