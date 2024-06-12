/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 
*/
function removeElement(nums, val) {
  let k = 0 // Contador inicializado en 0 para llevar la cuenta de los elementos válidos

  // Iteramos sobre cada elemento del arreglo
  for (let i = 0; i < nums.length; i++) {
    // Si el elemento actual no es igual al valor buscado, lo movemos al inicio del arreglo
    if (nums[i] !== val) {
      nums[k] = nums[i] // Movemos el elemento válido al índice k
      k++ // Incrementamos el contador de elementos válidos
    } else {
      // Si el elemento es igual a val, lo eliminamos del arreglo
      nums.splice(i, 1)
      i-- // Decrementamos i porque hemos cambiado el tamaño del arreglo
    }
  }

  // Devolvemos el número de elementos válidos encontrados
  return k
}

// Ejemplo de uso:
console.log(removeElement([3, 2, 2, 3], 3)) // Debería imprimir 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // Debería imprimir 5
