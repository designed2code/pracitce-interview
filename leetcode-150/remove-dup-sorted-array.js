/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

/*
count tracks where to write the next new value.

Whenever the current value nums[i] differs from the previous value (nums[i-1]), it’s the first time we’ve seen that number—so we copy it into nums[count] and bump count.

If it’s the same as nums[i-1], we already have it in our compacted prefix, so we skip it.

At the end, count is exactly how many unique values we kept, and the first count entries of nums hold them in order.
*/
