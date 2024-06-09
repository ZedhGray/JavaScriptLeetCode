/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

function removeNthFromEnd(head, n) {
  // Crear un dummy node para simplificar el manejo de los casos especiales.
  const dummy = new ListNode(-1)
  dummy.next = head

  // Guardar el tamaño de la lista.
  let size = 0
  let current = dummy
  while (current !== null) {
    size++
    current = current.next
  }

  // Si n es igual al tamaño de la lista, eliminar el dummy node.
  if (n === size) {
    return dummy.next
  }

  // Crear dos punteros, fast y slow, inicializados en el dummy node.
  current = dummy
  let fast = dummy
  let slow = dummy

  // Avanzar fast n posiciones desde el inicio.
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  // Mover ambos punteros al final de la lista.
  while (fast !== null && fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }

  // Si solo hay un nodo en la lista, eliminarlo directamente.
  if (slow.next === null) {
    return dummy.next
  } else {
    // Eliminar el nodo previo al nodo que queremos eliminar.
    slow.next = slow.next.next
  }

  return dummy.next
}
