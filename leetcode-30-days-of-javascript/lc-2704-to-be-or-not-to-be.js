// https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript

var expect = function (val) {
  return {
    toBe: (toBeVal) => {
      if (toBeVal === val) {
        return true;
      } else {
        throw Error("Not Equal");
      }
    },
    notToBe: (notToBeVal) => {
      if (notToBeVal !== val) {
        return true;
      } else {
        throw Error("Equal");
      }
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
