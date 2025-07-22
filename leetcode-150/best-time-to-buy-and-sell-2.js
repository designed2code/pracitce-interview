// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

// https://www.youtube.com/watch?v=HWJ9kIPpzXs&t=77s

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let bd = 0;
  let sd = 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      sd++;
    } else {
      profit += prices[sd] - prices[bd];
      bd = sd = i;
    }
  }
  profit += prices[sd] - prices[bd];
  return profit;
};
