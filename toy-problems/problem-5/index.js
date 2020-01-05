// CHeck if a string is a palindrome
const str1 = 'car'
const str2 = 'racecar'

const isPalindrome = (string) => string == string.split('').reverse().join('')

console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
