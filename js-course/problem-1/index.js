// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
// 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 


const markHeight = 1.77
const johnHeight = 1.89
const markMass = 72.57
const johnMass = 65.77

const markBmi = markMass / (markHeight * markHeight)
const johnBmi = johnMass / (johnHeight * johnHeight)

const isHigherBmi = johnBmi > markBmi
console.log(`Is John's BMI higher than Mark's? ${isHigherBmi}`) 



