// https://leetcode.com/problems/house-robber?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  function solve(idx, nums, memo = {}) {
    if (idx in memo) return memo[idx];
    if (idx > nums.length - 1) return 0;
    if (idx == nums.length - 1) {
      return nums[idx];
    }
    let take = nums[idx] + solve(idx + 2, nums, memo);
    let notTake = solve(idx + 1, nums, memo);
    memo[idx] = Math.max(take, notTake);
    return memo[idx];
  }
  return solve(0, nums);
};
