// https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript
var createCounter = (n) => {
  return function () {
    return n++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
