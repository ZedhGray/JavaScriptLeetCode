/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/
var isPalindrome = function (s) {
  // Eliminar acentos
  let sinAcentos = s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
    .replace(/[^a-zA-Z0-9\s]/g, '') // Eliminar caracteres especiales

  // Convertir a minúsculas
  sinAcentos = sinAcentos.toLowerCase()

  // Eliminar espacios
  sinAcentos = sinAcentos.replace(/\s+/g, '')

  let reverse = sinAcentos

  function reverseString(str) {
    var newString = ''
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i]
    }
    return newString
  }

  reverse = reverseString(reverse)

  if (reverse == sinAcentos) return true
  return false
}
s = 'A man, a plan, a canal: Panama'

console.log(isPalindrome(s))
