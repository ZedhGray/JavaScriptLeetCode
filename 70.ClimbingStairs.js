/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/
function climbStairs(n) {
  if (n <= 2) return n // Base cases

  let dp = new Array(n + 1) // Initialize dp array
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] // Sum of ways to climb i-1 and i-2 steps
  }

  return dp[n]
}

// Example usage:
console.log(climbStairs(2)) // Output: 2
console.log(climbStairs(3)) // Output: 3
