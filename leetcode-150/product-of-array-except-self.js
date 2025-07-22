// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150

// Trick prefix and suffix product array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefixProduct = new Array(nums.length).fill(1);
  let suffixProduct = new Array(nums.length).fill(1);
  let ans = [];
  for (let i = 1; i < nums.length; i++) {
    prefixProduct[i] = prefixProduct[i - 1] * nums[i - 1];
  }
  for (let j = nums.length - 2; j >= 0; j--) {
    suffixProduct[j] = suffixProduct[j + 1] * nums[j + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefixProduct[i] * suffixProduct[i];
  }
  return ans;
};
