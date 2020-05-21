// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties,


function deepEqual(obj, obj){
  if (obj.value === obj.value){
    console.log('true')
  } else if (obj === {here: 1, object:2}) {
    console.log('false')
  }
}

const obj = {
  here: {is: 'an'}, 
  object:2
}

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(obj.here, 'yo')
console.log(obj.object, 'hi')
