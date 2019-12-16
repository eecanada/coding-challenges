// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.


const johnAverage = (89 + 120 + 103) / 3
const mikeAverage = (116 + 94 + 123) / 3
const maryAverage = (97 + 134 + 105) / 3

if(johnAverage > mikeAverage){
  console.log(`John's average score is higher ${johnAverage} than Mike's ${mikeAverage}`)
} else if (mikeAverage > johnAverage) {
  console.log(`Mike's average score is higher ${mikeAverage} than John's ${johnAverage}`)
} else {
  console.log('They tied')
}

if( maryAverage > johnAverage && mikeAverage){
  console.log(`Mary's average score is higher ${maryAverage} than Mike's ${mikeAverage} and John's ${johnAverage}`)
} else if (johnAverage > maryAverage && mikeAverage) {
  console.log(`John's average score is higher ${johnAverage} than Mike's ${mikeAverage} and Mary's${maryAverage}`)
} else if (mikeAverage > johnAverage && maryAverage){
  console.log(`Mike's average is higher than ${mikeAverage} Mary's ${maryAverage}`)
} else {
  console.log('They tied')
}