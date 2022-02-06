// Remove duplicate numbers from an array
// 1,3,2,4,5,

const ogArr = [1, 1, 1, 3, 4, 2, 4, 5, 5];

function removeDuplicate(arr) {
    let newArr = []
  for (let i = 0; i < arr.length; i++) {
     if(arr.includes(arr[i])){
       newArr.push(arr[i])  
     }
  }
  return newArr
}

console.log(removeDuplicate(ogArr))
