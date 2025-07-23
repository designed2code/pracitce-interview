// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

// https://www.geeksforgeeks.org/problems/check-for-subsequence4930/1

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  let left = 0;
  let right = 0;
  let len = s.length;
  while (right < t.length) {
    if (s[left] == t[right]) {
      len--;
      left++;
      right++;
    } else {
      right++;
    }
  }
  return len == 0;
};
