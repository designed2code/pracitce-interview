// https://alpha.learnersbucket.com/course/frontend-system-design/cu7d52w0zup419l2pt329

function printCollatzSequence(num) {
  while (num !== 1) {
    console.log(num);
    if (num % 2 == 0) {
      num = parseInt(num / 2);
    } else {
      num = num * 3 + 1;
    }
  }
  console.log(num);
}
printCollatzSequence(5);
