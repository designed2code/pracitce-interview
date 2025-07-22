// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

function majorityElement(nums) {
  let majorityEle = Math.floor(nums.length / 2);
  let mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mp.has(nums[i])) {
      mp.set(nums[i], mp.get(nums[i]) + 1);
    } else {
      mp.set(nums[i], 1);
    }
  }
  for (let [key, value] of mp) {
    if (value > majorityEle) {
      return key;
    }
  }
}
