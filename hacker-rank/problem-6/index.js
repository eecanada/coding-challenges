// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let largeSum = 0;
  let smallSum = 0;
  let largestNum = Math.max(...arr);
  let smallestNum = Math.min(...arr);

  for (let i = 0; i < arr.length; i++) {
    largeSum += arr[i];
    smallSum += arr[i];
  }

  largeSum = largeSum - smallestNum;
  smallSum = smallSum - largestNum;
  console.log(smallSum, largeSum);
}
miniMaxSum([1,9,7,3,5])