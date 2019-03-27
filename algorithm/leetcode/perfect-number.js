/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num == 1) {
        return false;
    }
    let curSum = 1;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            curSum += i;
        }
    }
    return curSum == num;
};