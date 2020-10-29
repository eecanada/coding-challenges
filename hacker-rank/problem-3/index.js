// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
  let highNumber = Math.max(...candles)
  let candleHeight = []
  for(let i = 0; i < candles.length;i++){
    if (highNumber === candles[i]){
      candleHeight.push(candles[i])
    }
  }
  return candleHeight.length
}

let eder = birthdayCakeCandles([3,2,1,3])
console.log(eder)