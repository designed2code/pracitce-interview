// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let n = nums.length;
  let maxAvg = -Infinity;
  while (j < n) {
    sum = sum + nums[j];
    if (j - i + 1 == k) {
      let currentAvg = sum / k;
      maxAvg = Math.max(maxAvg, currentAvg);
      sum = sum - nums[i];
      i++;
    }
    j++;
  }
  return maxAvg;
};
