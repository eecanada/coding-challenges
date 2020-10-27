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