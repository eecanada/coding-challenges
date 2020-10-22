// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


function checkPalindrome(str){
  let newStr = str.split('').reverse().join('')
  console.log(newStr)
  if(str === newStr){
    return true
  } 
}

let answer = checkPalindrome('moom')
console.log(answer)
