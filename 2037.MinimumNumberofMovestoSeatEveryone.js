/*
There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

You may perform the following move any number of times:

Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

Note that there may be multiple seats or students in the same position at the beginning.
 
*/
// Función que calcula el mínimo número de movimientos necesarios para asignar cada estudiante a una silla única.
function minMovesToSeat(seats, students) {
  // Crear un mapa para las posiciones de las sillas
  const seatMap = new Map()
  seats.forEach((seat, index) => seatMap.set(seat, index))

  // Ordenar los estudiantes por su posición actual
  students.sort((a, b) => a - b)

  let moves = 0 // Contador de movimientos
  for (let i = 0; i < students.length; i++) {
    const studentPos = students[i]
    let closestSeatIndex
    if (!seatMap.has(studentPos)) {
      // Si no hay una silla en la posición actual del estudiante
      // Buscar la posición más cercana con una silla disponible
      let left = studentPos - 1
      let right = studentPos + 1
      while (left >= 0 || right <= Object.keys(seatMap).length) {
        if (left >= 0 && seatMap.has(left)) {
          closestSeatIndex = left
          break
        } else if (right <= Object.keys(seatMap).length && seatMap.has(right)) {
          closestSeatIndex = right
          break
        }
        left--
        right++
      }
      // Calcular los movimientos necesarios para llegar a la posición de la silla más cercana
      moves += Math.abs(closestSeatIndex - studentPos)
    }
  }

  return moves
}

// Ejemplos de uso
console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])) // Debería imprimir 4
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])) // Debería imprimir 7
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])) // Debería imprimir 4
