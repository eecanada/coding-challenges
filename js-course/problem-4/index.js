// Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

// 1. For each of them, create an object with properties for their full name, mass, and height
// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
// Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

const john = {
  firstName : 'john',
  height : 1.88,
  mass : 81.6,
  calcBMI : function(){ 
    this.bmi = this.mass / (this.height * this.height)
   }
}

john.calcBMI()
console.log(john)


const mark = {
  firstName : 'mark',
  height: 1.73,
  mass: 74.6,
  calcBMI : function(){
    this.bmi = this.mass / (this.height * this.height)
  }
}

mark.calcBMI()
console.log(mark)


if(mark.bmi > john.bmi){
  console.log(`${mark.firstName} has a BMI of ${mark.bmi}, which is higher than ${john.firstName}'s `)
} else {
  console.log(`${john.firstName} has a BMI of ${john.bmi}, which is higher than ${mark.firstname}'s`)
}


