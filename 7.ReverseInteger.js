// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321

var reverse = function(x) {
    let reversed = 0
    let sign = Math.sign(x)
    let num = Math.abs(x)
    while (num > 0) {
        reversed = (reversed * 10) + (num % 10)
        num = Math.floor(num / 10)
    }
    if (reversed > (2 ** 31 - 1)) return 0
    return reversed * sign
    
}
