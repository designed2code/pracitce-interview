// https://leetcode.com/problems/counter-ii/submissions/1709024115/?envType=study-plan-v2&envId=30-days-of-javascript

var createCounter = function (init) {
  let currentValue = init;
  return {
    increment: () => {
      currentValue += 1;
      return currentValue;
    },
    decrement: () => {
      currentValue -= 1;
      return currentValue;
    },
    reset: () => {
      currentValue = init;
      return currentValue;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
