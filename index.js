function sumRange(start,end){
  let total = []
  for(let i  = start; i <= end; i++ ){
    total.push(i)
  }
  return total
}

let solution = sumRange(1,10)
console.log(solution)
