// https://alpha.learnersbucket.com/course/frontend-system-design/b9rauwnzgakizhdaouaku

function reverseStr(str, n) {
  if (n == 0) return "";
  return str[n - 1] + reverseStr(str, --n);
}

console.log(reverseStr("hello", 5));
