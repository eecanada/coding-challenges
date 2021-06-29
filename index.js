//////////////////////////////////////////////////////
function Range(start, end) {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

let solution = Range(1, 10);
console.log(solution);
/////////////////////////////////////////////////////
function Sum(arr) {
  let total = 0;
  for (value of arr) {
    total += value;
  }
  return total;
}

const results = Sum([1, 2, 3]);
console.log(results);
//////////////////////////////////////////////////////
function modRange(start, end, steps = 1) {
  let range = [];

  if (start < end) {
    for (let i = start; i <= end; i += steps) {
      range.push(i);
    }
  }
  if (end < start) {
    for (let i = start; i >= end; i += steps) {
      range.push(i);
    }
  }
  return range;
}

let modSolution = modRange(1, 10);
console.log(modSolution);
