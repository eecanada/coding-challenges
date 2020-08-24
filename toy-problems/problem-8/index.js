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