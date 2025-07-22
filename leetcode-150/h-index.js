// https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150

// Soln :- https://www.youtube.com/watch?v=8KpirgdcXgE
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let n = citations.length;
  let arr = new Array(n + 1).fill(0);
  let count = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > n) {
      arr[n]++;
    } else {
      arr[citations[i]]++;
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    count = count + arr[i];
    if (count >= i) {
      return i;
    }
  }
};
