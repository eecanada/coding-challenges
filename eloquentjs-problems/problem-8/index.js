// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.


function arrList(start, end){
  const numbers = []
  for(let i = start; i <= end; i++){
    numbers.push(i)
  }
  return numbers
}

const numArr = arrList(1,5)
console.log(numArr) 
