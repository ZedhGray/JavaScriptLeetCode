/*
There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.
*/
var numWaterBottles = function (numBottles, numExchange) {
  let check = 0
  let result = 0
  while (numBottles > 0) {
    numBottles--
    result += 1
    check += 1
    if (check == numExchange) {
      numBottles++
      check = 0
    }

    if (numBottles == 0) break
    console.log(check)
    console.log(`botles: ${numBottles}`)
  }
  return result
}
console.log(numWaterBottles(15, 4))
