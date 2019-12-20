// Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
// This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
// John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

// Implement a tip calculator using objects and loops:
// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
// 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). 


const john = {
  bills : [124 , 48, 268, 180, 42],
  tips : [],
  total: [],
  calcTotal: function(){
    for(let i = 0; i < this.bills.length; i++){
      if (this.bills[i] < 50) {
        const tip = this.bills[i] * .20 
        const totalPaid =  this.bills[i] + tip
        this.tips.push(tip)
        this.total.push(totalPaid)
      } else if (this.bills[i] >= 50 && this.bills[i] <= 200 ){
        const tip = this.bills[i] * .15
        const totalPaid = this.bills[i] + tip
        this.tips.push(tip)
        this.total.push(totalPaid)
      } else if (this.bills[i] > 200){
        const tip = this.bills[i] * .10
        const totalPaid = this.bills[i] + tip
        this.tips.push(tip)
        this.total.push(totalPaid)
      }
    }
  }
}


john.calcTotal()
// console.log(john)


// Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
// Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
// 5. Implement the same functionality as before, this time using Mark's tipping rules
// 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
// 7. Calculate the average tip for each family
// 8. Log to the console which family paid the highest tips on average



const mark = {
  bills : [77,375,110,45],
  tips: [],
  totals: [],
  calcTotal: function () { 
    for (let i = 0; i < this.bills.length; i++){
      if(this.bills[i] < 100){
        const tip = this.bills[i] * .20
        const totalPaid = this.bills[i] + tip
        this.tips.push(tip)
        this.totals.push(totalPaid)
      } else if(this.bills[i] >= 100 && this.bills[i] <= 300){
        const tip = this.bills[i] * .10
        const totalPaid = this.bills[i] + tip
        this.tips.push(tip)
        this.totals.push(totalPaid)
      } else if(this.bills[i] > 300){
        const tip = this.bills[i] * .25
        const totalPaid = this.bills[i] + tip
        this.tips.push(tip)
        this.totals.push(totalPaid)
      }
    }
  }
}

mark.calcTotal()
// console.log(mark)


///////////////////////////////////////AVERAGE TIPS////////////////////////////////////////
let sum = 0
function calcAverage() { 
  for(let i = 0; i < mark.tips.length; i++){
    sum = sum + mark.tips[i]
    avg = sum / mark.tips.length
  }
  // cannot return inside a for loop
  return avg
 }
 console.log(calcAverage(), 'mark tip')


let sum1 = 0
function calcAverage1() { 
  for(let i = 0; i < john.tips.length; i++){
    sum1 = sum1 + john.tips[i]
    avg = sum / john.tips.length
  }
  // cannot return inside a for loop
  return avg
 }
 console.log(calcAverage1(), 'john tip')

 console.log(calcAverage1() < calcAverage())