/*
There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. Every second, the person holding the pillow passes it to the next person standing in the line. Once the pillow reaches the end of the line, the direction changes, and people continue passing the pillow in the opposite direction.

For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.
Given the two positive integers n and time, return the index of the person holding the pillow after time seconds.
*/
var passThePillow = function (n, time) {
  let numResult = 0

  while (time >= 0) {
    for (let i = 1; i < n; i) {
      i++
      numResult = i
      time--
      console.log(`Tiempo ->: ${time}, index: ${numResult}`)
      if (time == 0) break
    }
    if (time == 0) break
    for (let i = n; i > 1; i) {
      i--
      numResult = i
      time--
      console.log(`Tiempo <-: ${time}, Resultado: ${numResult}`)
      if (time == 0) break
    }
    if (time == 0) break
  }
  return numResult
}
console.log(passThePillow(18, 38))
