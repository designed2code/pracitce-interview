// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// Refer https://www.youtube.com/watch?v=nhEMDKMB44g&t=31s
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let min = nums[0];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[low] <= nums[mid]) {
      //  left half sorted
      min = Math.min(min, nums[low]); // I have picked up the minimum
      low = mid + 1; // so discarding left half since I have picked up the mi
    } else {
      // right half sorted
      min = Math.min(min, nums[mid]); // pick up the minimum
      high = mid - 1; // discard right half
    }
  }
  return min;
};
