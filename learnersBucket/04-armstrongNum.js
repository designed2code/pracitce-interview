// https://alpha.learnersbucket.com/course/frontend-system-design/ezuesksflmqrsekjgdqkf
function armStrongNumber(n) {
  let result = 0;
  let originalNum = n;
  while (n > 0) {
    result += Math.pow(n % 10, 3);
    n = Math.floor(n / 10);
  }
  return result === originalNum;
}
