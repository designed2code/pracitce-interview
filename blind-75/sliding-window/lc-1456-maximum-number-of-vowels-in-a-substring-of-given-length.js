// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let set = new Set(["a", "e", "i", "o", "u"]);
  let i = 0;
  let j = 0;
  let n = s.length;
  let count = 0;
  let vowelCount = -Infinity;
  while (j < n) {
    let ch = s[j];
    if (set.has(ch)) {
      count++;
    }
    if (j - i + 1 == k) {
      vowelCount = Math.max(vowelCount, count);
      if (set.has(s[i])) {
        count--; // count-- and not set.delete(s[i]) for set.delete(s[i]) refer to the problem longest substring without repeating characters
      }
      i++;
    }
    j++;
  }
  return vowelCount;
};
