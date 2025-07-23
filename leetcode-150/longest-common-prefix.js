// https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let shortestLength = strs.reduce(
    (minLength, currentString) => Math.min(minLength, currentString.length),
    Infinity
  );
  for (let i = shortestLength; i >= 0; i--) {
    let currentPrefix = strs[0].substring(0, i);
    if (strs.every((str) => str.startsWith(currentPrefix))) {
      return currentPrefix;
    }
  }
  return "";
};
