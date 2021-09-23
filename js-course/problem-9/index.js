///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅ 
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

let textField = document.createElement('textarea');
let button = document.createElement('button');
button.innerHTML = 'submit';
textField.innerHTML = `underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure`;
document.body.append(button);
document.body.append(textField);

document.querySelector('button').addEventListener('click', function () {
  let text = document.querySelector('textarea').value;
  let removeLineBreak = text.replace(/(\r\n|\n|\r)/gm, ' ');
  let arrayWoLineBreaks = removeLineBreak.split(' ');
  let wordsOnly = arrayWoLineBreaks.filter(
    (arrayWoLineBreak) => arrayWoLineBreak != ''
  );

  let lower = [];
  let locationOfUnderscore;
  for (let word of wordsOnly) {
    let lowerCase = word.toLowerCase();
    let locationOfUnderscore = lowerCase.indexOf('_');
    lower.push(lowerCase);
  }

  const camelCase = [];
  for (let letters of lower) {
    const lettersSplit = letters.split('');
    let locationOfUnderscore = lettersSplit.lastIndexOf('_');
    let addOne = locationOfUnderscore + 1;
    lettersSplit[addOne] = lettersSplit[addOne].toUpperCase();
    let camel = lettersSplit.join('');
    camelCase.push(camel.replace('_', ''));
    console.log(camelCase);
  }

  let emptyPad = [];
  for (let camelWord of camelCase) {
    emptyPad.push(camelWord.padEnd(20, '  '));
  }

  console.log(emptyPad);

  for (let i = 0; i < emptyPad.length; i++) {
    let sum = 21;
    sum += i;
    console.log(emptyPad[i].padEnd(sum, '✅'));
  }
});
