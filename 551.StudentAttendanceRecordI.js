/*
You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.
The student is eligible for an attendance award if they meet both of the following criteria:

The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Return true if the student is eligible for an attendance award, or false otherwise.
*/
var checkRecord = function (s) {
  let arr = s.split('')
  let A = 0
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'A') {
      A += 1
      if (counter < 3) {
        counter = 0
      }
    }
    if (arr[i] === 'P') {
      if (counter < 3) {
        counter = 0
      }
    }
    if (arr[i] === 'L') {
      counter += 1
    }
  }
  if (A >= 2 || counter >= 3) return false
  return true
}
let s = 'LPLPLPLPLPL'
console.log(checkRecord(s))
/*
function checkRecord(s) {
  if ([...s].filter((e) => e == "A").length > 1) return false;
  if (s.includes("LLL")) return false;
  return true;
}
*/
