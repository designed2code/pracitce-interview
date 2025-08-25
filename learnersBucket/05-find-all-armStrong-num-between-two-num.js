// https://alpha.learnersbucket.com/course/frontend-system-design/sxunq676tdc-pionmfyjq
function armStrongNum(n) {
  let result = 0;
  let originalNum = n;
  while (n > 0) {
    // extract last digit
    let lastDigit = n % 10;
    // cube the last digit add to result
    result += Math.pow(lastDigit, 3);
    // reduce the number
    n = Math.floor(n / 10);
  }
  return result == originalNum;
}

function printArmStrong(start, end) {
  for (let i = start; i < end; i++) {
    if (armStrongNum(i)) {
      console.log(i);
    }
  }
}
console.log(printArmStrong(300, 700));
