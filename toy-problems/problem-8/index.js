//What is the output of the following code?
let names = ['John', 'Fred', 'Ann'];
let [Ann, Fred, John] = names;
console.log(John) //Ann


//What is the output of the following code?
let nums = [3, 4, 5];
let all = [1, 2, ...nums, 6];
console.log(all[3]);// 4


//What is the output of the following code?
function add (a = 0, b = 10) {
  return a + b;
}
const sum = add(10);
console.log(sum); //--> 20


//What is the output of the following code?
function User(email, flags = { isActive: false }, numbers = [7, 1]) {
  this.email = email;
  this.flags = flags;
  this.numbers = numbers;
}
const user = new User('testing@gmail.com');
console.log(user);

{
  email: 'testing@gmail.com',
  flags: {
    isActive: false,
  },
  numbers: [7,1]
}


//What is the output of the following code?
function sum(...numbers) {
  return numbers.reduce((acc, number) => acc + number);
}

const answer = sum(1, 5, 20, 10);

console.log(answer); //36


// //What is the output of the following code?
function multiplyBy2(base, ...numbers) {
  return numbers.map(number => number * 2 + base)
}

const answer = multiplyBy2(100, 1, 5, 20, 10);
console.log(answer); //[102,110,140,120]


//What is the output of the following code?
const names = ['roger', 'alex', 'bob'];
const message = `Will the following ${names.length} students please report to the office: ${names.join(', ')}`
console.log(message);
// Will the following 3 students please report to the office: roger, alex, bob


//What is the output of the following code?
const message = `there
is
no
  cow
level`
console.log(message); //string with spaces


//What is the output of the following code?
const name = 'bob';
const age = 20;
const obj = {name, age};
console.log(obj);//{name:'bob, age:20}


//What is the output of the following code?
const confused = 'no';
const myKey = confused;
const obj = {
    [myKey]: false
}
console.log(obj); //{'no':false}