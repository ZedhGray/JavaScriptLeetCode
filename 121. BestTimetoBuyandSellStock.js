/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
var maxProfit = function (prices) {
  let min = prices[0]
  let max = 0
  let result = 0
  let results = []

  for (let i = 0; i <= prices.length; i++) {
    if (prices[i] <= min) {
      min = prices[i]
      max = prices[i]
    }
    if (prices[i] > max) {
      max = prices[i]
    }
    result = max - min
    results.push(result)
  }
  result = Math.max(...results)
  return result
}

let precios = [2,4,1]
console.log(maxProfit(precios))
