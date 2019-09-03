/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if (n === 1) {
        return 1
    }
    let sum = 0
    let i;
    for (i = 1; i < n; i++) {
        sum += i
        if (sum > n) {
            break
        }
    }
    return i - 1
};
