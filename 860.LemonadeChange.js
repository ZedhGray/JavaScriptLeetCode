/*
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.
*/
var lemonadeChange = function (bills) {
  let change = {
    5: 0,
    10: 0,
    20: 0,
  }
  for (bill of bills) {
    if (bill == 5) {
      change[5] += 5
    }
    if (bill == 10) {
      if (change[5] >= 5) {
        change[10] += 10
        change[5] -= 5
      } else {
        return false
      }
    }
    if (bill == 20) {
      if (change[10] >= 10 && change[5] >= 5) {
        change[20] += 20
        change[10] -= 10
        change[5] -= 5
      } else if (change[10] <= 10 && change[5] >= 15) {
        change[20] += 20
        change[5] -= 15
      } else {
        return false
      }
    }
  }
  return true
}
let bills = [5, 5, 5, 10, 20]
console.log(lemonadeChange(bills))
