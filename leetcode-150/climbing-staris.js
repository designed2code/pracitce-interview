/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  function solve(idx, n) {
    if (idx == n) return 1;
    if (idx > n) return 0;
    let oneStep = solve(idx + 1, n);
    let twoStep = solve(idx + 2, n);
    return oneStep + twoStep;
  }
  return solve(0, n);
};

console.log(climbStairs(3));
