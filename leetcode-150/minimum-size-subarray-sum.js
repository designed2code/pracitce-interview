// https://leetcode.com/problems/minimum-size-subarray-sum/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0;
  let j = 0;
  let n = nums.length;
  let sum = 0;
  let minLen = Infinity;
  while (j < n) {
    sum = sum + nums[j];
    // Invalid Window Condition
    while (sum >= target) {
      minLen = Math.min(minLen, j - i + 1);
      sum = sum - nums[i];
      i++;
    }
    j++;
  }
  return minLen == Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// Output :- 2
