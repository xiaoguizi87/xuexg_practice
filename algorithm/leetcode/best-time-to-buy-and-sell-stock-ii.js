/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
        var profit = 0
        for (var i = 0; i < prices.length - 1; i++) {
            if (prices[i+1] - prices[i] > 0) {
                profit += prices[i+1] - prices[i]
            }
        }
        return profit
};
