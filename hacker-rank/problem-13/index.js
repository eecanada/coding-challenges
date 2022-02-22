function oddNumbers(a,b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    if (i % 2 == 1) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(oddNumbers(1,5))