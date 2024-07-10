/*
The Leetcode file system keeps a log each time some user performs a change folder operation.
The operations are described below:
"../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
"./" : Remain in the same folder.
"x/" : Move to the child folder named x (This folder is guaranteed to always exist).
You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.
The file system starts in the main folder, then the operations in logs are performed.
Return the minimum number of operations needed to go back to the main folder after the change folder operations.
*/

function minOperations(logs) {
  let depth = 0 // Current depth of the folder structure

  // Iterate through each operation
  for (const log of logs) {
    switch (log) {
      case '../':
        // Move up one level
        if (depth > 0) depth--
        break
      case './':
        // Stay in the same folder
        break
      default:
        // Move down into a subfolder
        depth++
        break
    }
  }

  // The minimum number of operations to return to the main folder is the maximum depth reached
  return depth
}
