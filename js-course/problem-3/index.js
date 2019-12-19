// John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
// To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

// In the end, John would like to have 2 arrays:
// 1) Containing all three tips (one for each bill)
// 2) Containing all three final paid amounts (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

const tips = []
const finalPaid =[]

function calculateTip(bill){
  if(bill < 50){  
    const tip = bill * .20
    let total = bill + tip
    tips.push(tip)
    finalPaid.push(total)
    return 'bill less than 50'

  }else if(200 > bill && bill >= 50){
    const tip = bill * .15
    let total = bill + tip
    tips.push(tip)
    finalPaid.push(total)
    return 'bill less than 200 and more then 50'

  } else if(bill > 200){
    const tip =  bill *.10
    let total = bill + tip
    tips.push(tip)
    finalPaid.push(total)
    return 'bill more than 50'
  }
}

calculateTip(48)
calculateTip(124)
calculateTip(268)


console.log('tips', tips)
console.log('total', finalPaid)


