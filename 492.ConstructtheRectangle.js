/*
A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

The area of the rectangular web page you designed must equal to the given target area.
The width W should not be larger than the length L, which means L >= W.
The difference between length L and width W should be as small as possible.
Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.
*/
/*
var constructRectangle = function (area) {
  let areas = []
  let result = []
  let minDiference = Infinity
  for (let i = 1; i <= area; i++) {
    for (let j = i; j <= area; j++) {
      // Verificamos si el producto del par es igual al número objetivo
      if (i * j === area) {
        areas.push([j, i])
      }
    }
  }
  for (let i = 0; i < areas.length; i++) {
    const [num1, num2] = areas[i]
    const diference = Math.abs(num1 - num2)
    if (diference < minDiference || (result === null && diference === 0)) {
      minDiference = diference
      result = [num1, num2]
    }
  }
  return result
}
let area = 122122
console.log(constructRectangle(area))

*/
var constructRectangle = function (area) {
  let maxW = Math.floor(Math.sqrt(area))
  console.log(maxW)
  let result = []

  for (let w = maxW; w > 0; w--) {
    let h = area / w
    if (h % 1 === 0) {
      // Verifica si h es un número entero
      result = [h, w]
      break // Salida temprana una vez encontrada la solución
    }
  }

  return result
}
let area = 122122
console.log(constructRectangle(area))
