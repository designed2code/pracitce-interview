// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums, index = 0) {
  if (index >= nums.length - 1) {
    return true;
  }
  if (nums[index] == 0) {
    return false;
  }
  for (let step = 1; step <= nums[index]; step++) {
    if (canJump(nums, step + index)) {
      return true;
    }
  }
  return false;
};
