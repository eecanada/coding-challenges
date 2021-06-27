function sumRange(start,end){
  let total = 0
  for(let i  = start; i <= end; i++ ){
    total += i 
  }
  return total
}

let solution = sumRange(1,5)
console.log(solution)

