/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num < 0 || num & (num - 1)) {
        return false
    }
    return num % 3 === 1
};
