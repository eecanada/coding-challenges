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


// alternate solution
function range(start,end){
  arr = []
  while (end >= start){
    console.log(start)
    arr.push(start)
    start++  
    }
    return arr
  }

console.log(range(20,50))




// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.
function sum(nums) {
  let sum = 0
  for (let num of nums) {
    sum = sum + num
  }
  return sum
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))




//modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior.
function range(start,end,step){
  let arr = []
  if(typeof(step) === "undefined"){
    for(let i = start; i <= end; i++){
      arr.push(i)
    }
  } else if (step < 0){
    for(let i = start; i >= end; i = i - Math.abs(step)){
      arr.push(i)
    }
  } else {
    for(let i = start; i <= end; i = i + step){
      arr.push(i)
    }
  } 
  return arr
}

console.log(range(10,1,-2))

function sumRange(start,end){
  let total = []
  for(let i  = start; i <= end; i++ ){
    total.push(i)
  }
  return total
}

let solution = sumRange(1,3)
console.log(solution)

