// https://www.youtube.com/watch?v=KVU4JNNJkVg

// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(area, max);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};
