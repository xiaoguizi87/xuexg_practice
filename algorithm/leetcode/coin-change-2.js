/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = [1]
    for (let i = 1; i<= amount; i++) {
        dp[i] = 0
    }
    for (let c of coins) {
        for (let i = c; i <= amount; i++) {
            dp[i] += dp[i-c]
        }
    }
    console.log(dp)
    
    return dp[amount]
}
