// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

let sum = 0
function getSum(){
  let num1 = 1;
  let num2 = 2;
  while(i < 4000000 ){
    if(num1 % 2 === 0) {
      console.log('this is sum', sum+=num1)
    }
    if(num2 % 2 === 0){
      console.log('this is sum', sum+=num2)
    }
    num1+= num2
    num2+= num1
   }
}
getSum()

while(let i = 0; i < 4000000; i ++)




