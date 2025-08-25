// https://alpha.learnersbucket.com/course/frontend-system-design/edr-zv-eh4ignodu0tpge
function smallestPossibleNumber(num) {
  // initialize frequency of each digit to Zero
  let freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  // count frequency of each digit in the number
  while (num > 0) {
    let d = parseInt(num % 10); // extract last digit
    freq[d]++; // increment counting
    num = parseInt(num / 10); //remove last digit
  }

  // Set the LEFTMOST digit to minimum expect 0
  let result = 0;
  for (let i = 1; i <= 9; i++) {
    if (freq[i] != 0) {
      result = i;
      freq[i]--;
      break;
    }
  }

  // arrange all remaining digits
  // in ascending order
  for (let i = 0; i <= 9; i++) {
    while (freq[i]-- != 0) {
      result = result * 10 + i;
    }
  }

  return result;
}

/*Input:

console.log(smallestPossibleNumber('55010'));
console.log(smallestPossibleNumber('7652634'));
console.log(smallestPossibleNumber('000001'));
console.log(smallestPossibleNumber('000000'));

Output:
10055
2345667
100000
000000

*/
