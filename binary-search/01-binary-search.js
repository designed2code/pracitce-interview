function Binarysearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

/*
Example 1:

Input: nums = [-1,0,2,4,6,8], target = 4

Output: 3
Example 2:

Input: nums = [-1,0,2,4,6,8], target = 3

Output: -1
*/
