var t0 = performance.now()

let reverseArray = arr => {
  let newArr = []
  for (let i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

var t1 = performance.now()

// console.log(reverseArray([1,2,3]))
console.log(reverseArray([1,2,3]) + (t1 - t0) + " milliseconds.")
