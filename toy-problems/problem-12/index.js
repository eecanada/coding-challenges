function checkNumber(num) {
  if (num[3] == "-") {
    if (num[3] != "-" || num.length != 8) return;
    let copy = num.split("");
    copy.splice(3, 1);
    let copyToNum = copy.map((strNum) => Number(strNum));
    const numberIsItRange = (currentValue) => {
      return currentValue >= 0 && currentValue <= 9;
    };
    const answer = copyToNum.every(numberIsItRange);
    if (answer) {
      return "yes";
    } else {
      return "no";
    }
  }
  else {
     if (num.length != 7) return;
     let copy = num.split("");
    copy.splice(3, 1);
    let copyToNum = copy.map((strNum) => Number(strNum));
    const numberIsItRange = (currentValue) => {
      return currentValue >= 0 && currentValue <= 9;
    };
    const answer = copyToNum.every(numberIsItRange);
    if (answer) {
      return "yes";
    } else {
      return "no";
    }
  }
}

console.log(checkNumber("1235456"));
