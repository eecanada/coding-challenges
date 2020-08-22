//What is the output of this code?
const obj1 = {
  a: 0,
  b: 2,
  c: 4
};
const obj2 = Object.assign({}, obj1, {d:6});
console.log(obj2.c, obj2.d);

// 46