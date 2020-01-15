
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// console.log("string"[3]) // --> 'i'


function countBs (str) {
  const splitStr = str.split('')
  const Bees = []
  for(let i = 0; i < splitStr.length; i++){
    if(splitStr[i] === 'B'){
      Bees.push(splitStr[i])
    }
  }
  console.log(Bees.length)
}

countBs('BaBs')
