// https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let i = 0;
  let j = 0;
  let count = 0;
  let n = nums.length;
  let maxLen = -Infinity;
  while (j < n) {
    let num = nums[j];
    if (num == 0) {
      count++;
    }
    while (count > k) {
      if (nums[i] == 0) {
        count--;
      }
      i++;
    }
    maxLen = Math.max(maxLen, j - i + 1);
    j++;
  }
  return maxLen;
};

// Ditto same to the question lc-1493
