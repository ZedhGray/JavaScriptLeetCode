/**
 Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
 */

var isMatch = function (s, p) {
  // Inicializar matriz dp
  var dp = Array.from({ length: s.length + 1 }, () =>
    Array(p.length + 1).fill(false)
  )

  // Patrones vacíos coinciden con cadenas vacías
  dp[s.length][p.length] = true

  // Un solo carácter coincide con cualquier carácter
  for (var i = s.length; i >= 0; i--) {
    for (var j = p.length - 1; j >= 0; j--) {
      var firstMatch = i < s.length && (p[j] === s[i] || p[j] === '.')

      if (j + 1 < p.length && p[j + 1] === '*') {
        dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j])
      } else {
        dp[i][j] = firstMatch && dp[i + 1][j + 1]
      }
    }
  }

  return dp[0][0]
}

// Ejemplo de uso
console.log(isMatch('aa', 'a')) // false
console.log(isMatch('aa', 'a*')) // true
console.log(isMatch('ab', '.*')) // true
console.log(isMatch('aab', 'c*a*b')) // true
