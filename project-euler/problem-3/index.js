// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// create function to find largest prime factor
// function takes in number to check 
// function checks if the number has a prime factor 
// if it is primer number, store results in an array 
// compare all values in the array and select the highest one 


let divider = 2;
let num = 600851475143;
while(num > 1){
    if(num % divider === 0){ 
        num = num / divider;
    } else {
        divider++;
    }
}
console.log(divider);



