// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let i = 0;
  let j = 0;
  let n = nums.length;
  let zeroCount = 0;
  let maxLen = -Infinity;
  while (j < n) {
    let num = nums[j];
    if (num == 0) {
      zeroCount++;
    }
    while (zeroCount > 1) {
      if (nums[i] == 0) {
        zeroCount--;
      }
      i++;
    }
    maxLen = Math.max(maxLen, j - i + 1);
    j++;
  }
  return maxLen - 1;
};

console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
