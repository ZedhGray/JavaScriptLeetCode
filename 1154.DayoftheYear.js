/*
Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.
*/
var dayOfYear = function (date) {
  const parts = date.split('-')
  const year = parseInt(parts[0])
  const month = parseInt(parts[1]) - 1 // Months are 0-indexed in JavaScript Date objects
  const day = parseInt(parts[2])

  // Calculate the total days in the months before the current month
  let totalDaysInMonthsBeforeCurrent = 0
  for (let i = 0; i < month; i++) {
    totalDaysInMonthsBeforeCurrent += new Date(year, i, 1).getDate()
  }

  // Add the current day to the total days in months before the current month
  return totalDaysInMonthsBeforeCurrent + day
}
