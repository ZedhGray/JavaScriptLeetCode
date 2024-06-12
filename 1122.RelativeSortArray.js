/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 
*/
var relativeSortArray = function (arr1, arr2) {
  //2
  let newArray = []
  for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        newArray.push(arr1[j])
      }
    }
    arr1 = arr1.filter(function (element) {
      return element !== arr2[i]
    })
  }
  const remainingElements = arr1.sort((a, b) => a - b)
  console.log(remainingElements)
  // Luego, agregamos esos elementos ordenados a newArray
  for (const element of remainingElements) {
    newArray.push(element)
  }

  return newArray
}

// Ejemplo de uso:
const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
const arr2 = [2, 1, 4, 3, 9, 6]
console.log(relativeSortArray(arr1, arr2)) // Salida esperada: [2,2,2,1,4,3,3,9,6,7,19]
