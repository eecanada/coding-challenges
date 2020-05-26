// Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument.


function arrayToList(...arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i], 'hit')
    list = {value: arr[i], rest: list};
  }
  return list;
}

console.log(arrayToList(1,2,3))


//Also write a listToArray function that produces an array from a list.


let list = { value: 1, 
  rest: { value: 2, 
    rest: { value: 3, 
      rest: null } } }

const listToArray = (list) => {
  console.log(list)
}

listToArray(list)