/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    if (N < 2) {
        return false
    }  
    var dp = [false, false]
    for (let i = 2; i <= N; i++) {
        for (let j = 1; j < i; j++) {
            if (!dp[i - j] && i % j === 0) {
                dp[i] = true
                break
            }
        }
    }
    return !!dp[N]
};
