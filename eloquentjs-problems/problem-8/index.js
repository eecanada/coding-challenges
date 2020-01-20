// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.


function arrList(start, end){
  const numbers = []
  for(let i = start; i <= end; i++){
    numbers.push(i)
  }
  return numbers
}

const numArr = arrList(1,10)
console.log(numArr) 

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

function addArr(arr){
  sum = 0
  for(let i = 0; i < arr.length; i++){
    sum = arr[i] + sum
  }
  console.log(sum)
}

addArr(numArr)
