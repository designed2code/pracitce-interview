// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

// https://www.youtube.com/watch?v=4YjEHmw1MX0

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let leastPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    // Agar current day ka price bhi least price se chota hai then update leastPrice
    if (prices[i] < leastPrice) {
      leastPrice = prices[i];
    }
    maxProfit = Math.max(maxProfit, prices[i] - leastPrice);
  }
  return maxProfit;
};
