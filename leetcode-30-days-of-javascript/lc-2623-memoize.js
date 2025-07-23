// https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript

var memoize = function (fn) {
  let memo = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in memo) {
      return memo[key];
    } else {
      memo[key] = fn(...args);
      return memo[key];
    }
  };
};

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
