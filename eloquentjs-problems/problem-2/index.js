//Looping a triangle -  Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

let num = "#"
let num1 = "#"

for (let i = 0; i < 7; i++){
  console.log(num)
  num = num + num1
}
