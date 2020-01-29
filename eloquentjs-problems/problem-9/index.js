// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 

const reverseArray = (arr) => {
  const newArr = []
  for (let i = arr.length - 1 ; i >= 0; i--){
    newArr.push(arr[i])
  }
  console.log(newArr)
}

const arr = [2,3,4,5,6]
reverseArray(arr)


// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

// const reverseArrayInPlace = (arr) => {
//   for (let i = arr.length; i > 0; i--){
//     console.log(arr)
//   }
// }

// const arr = [1,2,3,4,5]
// reverseArrayInPlace(arr)