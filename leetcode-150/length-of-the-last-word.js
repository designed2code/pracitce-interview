// https://leetcode.com/problems/length-of-last-word/?envType=study-plan-v2&envId=top-interview-150

// ------------- NAIVE ---------------
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s
    .split(" ")
    .filter((t) => Boolean(t))
    .reverse()[0].length;
};
// TC O(N) SC O(N)

// ------------- OPTIMAL ---------------
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let len = 0;
  let i = s.length - 1;
  // First loop burns off all the trailing spaces
  // so i lands on the last letter of the last word.
  while (i >= 0 && s[i] == " ") {
    i--;
  }

  // Second loop then marches backward only while s[i] !== ' '.
  // The moment it hits the space before the last word, it stops counting.
  while (i >= 0 && s[i] !== " ") {
    len++;
    i--;
  }
  return len;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
