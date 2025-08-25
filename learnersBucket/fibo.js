// https://alpha.learnersbucket.com/course/frontend-system-design/dl6si_ff1oe2miuy1hn-j
function fibo(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
}
