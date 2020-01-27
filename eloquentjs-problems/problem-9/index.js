// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 

const reverseArray = (arr) => {
  const newArr = []
  for (let i = arr.length; i > 0; i--){
    newArr.push(i)
  }
  console.log(newArr)
}

const arr = [1,2,3,4,5]
reverseArray(arr)
