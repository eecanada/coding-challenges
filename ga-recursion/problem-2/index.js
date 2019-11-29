// create a javaScript function that will add all of the numbers in an array

let arr = [2,3,8,6]

function sumArray(arr, index = 0, sum = 0){
  if(index === arr.length){
    return sum;
  }
  sum = sum + arr[index];
  return sumArray(arr, index + 1, sum)
}


console.log(sumArray(arr));

// solved this by setting up my parameters of arr, index, and sum, then set up the base case, at action was that if the base case was not met, then the sum should equal to current sum plus current value of the index, and finally the recursive action is to add +1 index to move through the array