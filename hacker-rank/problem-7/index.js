//Given a time in -hour AM/PM format, convert it to military (24-hour) time.
function timeConversion(s) {
  let timeStr;
  let newTime;
  let timeArr;
  if (s.includes('PM')) {
    timeStr = s.replace('PM', '');
    timeStr = timeStr.split(':');
    newTime = parseInt(timeStr, 10);
    newTime = newTime + 12;
    if (newTime === 24) {
      newTime = newTime - 12;
      timeArr = [newTime, timeStr[1], timeStr[2]];
      timeArr = timeArr.join(':');
    } else {
      timeArr = [newTime, timeStr[1], timeStr[2]];
      timeArr = timeArr.join(':');
    }
  } else {
    timeStr = s.replace('AM', '');
    timeStr = timeStr.split(':');
    newTime = parseInt(timeStr, 10);
    console.log(newTime)
    if (newTime == 12) {
      newTime = newTime - 12;
      newTime = newTime.toString()
      newTime = "0" + newTime
      timeArr = [newTime, timeStr[1], timeStr[2]];
      timeArr = timeArr.join(':');
    } else {
      newTime = newTime.toString()
      newTime = "0" + newTime
      timeArr = [newTime, timeStr[1], timeStr[2]];
      timeArr = timeArr.join(':');
    }
  }

  return timeArr;
}

let eder = timeConversion('06:40:03AM')
// timeArr = s.replace('AM', '')
console.log(eder)