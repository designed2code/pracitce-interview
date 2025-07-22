// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let n1 = haystack.length;
  for (let i = 0; i < n1; i++) {
    if (haystack[i] === needle[0]) {
      if (compare(haystack, needle, i) == true) {
        return i;
      }
    }
  }
  return -1;
};

function compare(haystack, needle, idx) {
  let n1 = haystack.length;
  let n2 = needle.length;
  if (n1 <= idx) return false;
  for (let i = 0; i < n2; i++) {
    if (haystack[idx++] !== needle[i]) {
      return false;
    }
  }
  return true;
}
