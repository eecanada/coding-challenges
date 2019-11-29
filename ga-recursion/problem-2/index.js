// create a javaScript function that will add all of the numbers in an array

let arr = [2,3,8,6]

function sumArray(arr, index = 0, sum = 0){
  if(index === arr.length){
    return sum;
  }
  sum += arr[index];
  return sumArray(arr, index + 1, sum)
}


console.log(sumArray(arr));