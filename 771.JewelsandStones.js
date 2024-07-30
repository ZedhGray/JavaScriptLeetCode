/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/
var numJewelsInStones = function (jewels, stones) {
  let arrJewels = jewels.split('')
  let arrStones = stones.split('')
  let counter = 0

  for (let i = 0; i < arrJewels.length; i++) {
    for (let j = 0; j < arrStones.length; j++) {
      if (arrJewels[i] === arrStones[j]) {
        counter++
      }
    }
  }
  return counter
}
let jewels = 'aA',
  stones = 'aAAbbbb'
console.log(numJewelsInStones(jewels, stones))
