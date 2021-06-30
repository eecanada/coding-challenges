// The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order.


let reverseArray = arr => {
  let newArr = []
  for (let i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

console.log(reverseArray([1,2,3]))


// The second, reverseArrayInPlace, does what the reverse method does: it modifies
// the array given as argument by reversing its elements. Neither may use the
// standard reverse method.


function reverseArrayInPlace(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  let arrLength = arr.length / 2;
  for (let i = 0; i < arrLength; i++) {
    console.log(arr.length, 'arr/length/2');
    arr.shift();
  }
  return arr;
}

console.log(reverseArrayInPlace([7, 0, 9, 5, 9, 10]));




