// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let lastIndexNums1 = m - 1;
  let lastIndexNums2 = n - 1;
  let mergedIndex = m + n - 1;
  while (lastIndexNums2 >= 0) {
    nums1[mergedIndex--] =
      lastIndexNums1 >= 0 && nums1[lastIndexNums1] > nums2[lastIndexNums2]
        ? nums1[lastIndexNums1--]
        : nums2[lastIndexNums2--];
  }
  console.log(nums1);
};

// soln :- https://algo.monster/liteproblems/88
// also pasted is an img of dry run named merge-sorted-array
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
/*
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
*/
