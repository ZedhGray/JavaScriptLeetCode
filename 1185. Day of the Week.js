/*
Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
*/
var dayOfTheWeek = function (day, month, year) {
  // Adjustments for months and century
  var monthAdjustment = month < 3 ? month + 12 : month - 3
  var century = year % 100
  var centuryAdjustment = (year / 100) | 0

  // Calculate the day of the week using Zeller's Congruence
  var q =
    day +
    Math.floor((13 * (monthAdjustment + 1)) / 5) +
    centuryAdjustment * Math.floor(century / 4) -
    Math.floor(century / 100) * Math.floor(century / 4)
  var dayOfWeek = q % 7

  // Map the calculated day of the week to its name
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  return daysOfWeek[dayOfWeek]
}

console.log(dayOfTheWeek(29, 2, 2016)) // Expected output: "Monday"
