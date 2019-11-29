// created a recursive function that counts down from a given number to zero.

function countDown (num){
  if (num < 0 ){
    return;
  }
  console.log(num)
  return countDown(num - 1)

}

countDown(10)

// recursion functions always need a base case to end other wise they will continue to invoke themselves 


// they need a base case, action, and recursive case