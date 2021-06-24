// Write a function min that takes two arguments and returns their minimum.

// solution 1 function decleration
function smallestNumber(num1, num2) {
  return Math.min(num1, num2);
}
console.log(smallestNumber(3, 9));

// solution 2 function expression
const smallestNumber = function (a, b) {
  return Math.min(a, b);
};
const num = smallestNumber(5, 6);
console.log(num);

//solution 3 arrow function
smallNum = (a, b) => Math.min(a, b);

//solution 4
function smallestNum(num, num2) {
  let results = num > num2 ? num2 : num;
  return results;
}

const small = smallestNum(1, -3);
console.log(small);
