// Write a function min that takes two arguments and returns their minimum.

// solution 1
function smallestNumber (num1, num2){
  return Math.min(num1,num2)

}
console.log(smallestNumber(3,9))

// solution 2
function smallerNumber (num3, num4){
  if(num3 < num4){
    return num3
  } else if (num4 < num3){
    return num4
  }
}

console.log(smallestNumber(12,5))