// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
  let positve = 0;
  let negative = 0;
  let zero = 0;
  let posAns;
  let negAns;
  let zeroAns;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero++;
    } else if (arr[i] > 0) {
      positve++;
    } else if (arr[i] < 0) {
      negative++;
    }

    posAns = (positve / arr.length).toFixed(6);
    negAns = (negative / arr.length).toFixed(6);
    zeroAns = (zero / arr.length).toFixed(6);
  }

  console.log(posAns);
  console.log(negAns);
  console.log(zeroAns);
}

plusMinus([-4, 3, -9, 0, 4, 1]);