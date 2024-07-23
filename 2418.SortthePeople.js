/*
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.
*/
var sortPeople = function (names, heights) {
  let swapped

  do {
    swapped = false
    for (let i = 0; i < heights.length - 1; i++) {
      if (heights[i] < heights[i + 1]) {
        let temp = heights[i]
        let temp2 = names[i]

        heights[i] = heights[i + 1]
        names[i] = names[i + 1]

        heights[i + 1] = temp
        names[i + 1] = temp2

        swapped = true
      }
    }
  } while (swapped)
  return names
}

let names = ['Mary', 'John', 'Emma']
let heights = [180, 165, 170]

console.log(sortPeople(names, heights))
