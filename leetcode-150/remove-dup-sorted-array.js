// Refer https://www.youtube.com/watch?v=06ALbFrgIoQ
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;
  let n = nums.length;
  while (j < n) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }
  return i + 1;
};
