function gradingStudents(...grades) {
  let newGrades = [];
  let originalGrades = [...grades];
  let finalGrades = []
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 0 && grades[i] <= 100) {
      if(grades[i] % 5  == 0){
        newGrades.push(grades[i])
      } else{
        while (grades[i] % 5 !== 0) {
          grades[i]++;
          if (grades[i] % 5 == 0) newGrades.push(grades[i]);
        }
      }
    }
  }
  for (let i = 0; i < newGrades.length && i < originalGrades.length; i++) {
    if (originalGrades[i] < 38) {
      finalGrades.push(originalGrades[i])
    } else if (newGrades[i] - originalGrades[i] < 3) {
      finalGrades.push(newGrades[i]);
    } else {
      finalGrades.push(originalGrades[i]);
    }
  }
  return finalGrades
}

let eder = gradingStudents(30, 58, 55, 101);
console.log(eder)





