// https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 100,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentVal = romanMap[s[i]];
    const nextVal = romanMap[s[i + 1]];

    // subtractive case, this occurs if we are not at the end of the string AND
    // the current symbol's value is less than the next symbol's value.
    if (i < s.length - 1 && currentVal < nextVal) {
      // If it's a subtractive case (e.g., 'IV', 'IX'), subtract the current value.
      result -= currentVal;
    } else {
      // Additive case (e.g., 'V', 'M', or the last symbol).
      // Add the current value to the total.
      result += currentVal;
    }
  }

  return result;
};
