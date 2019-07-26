/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (b === 0) {
        return a
    }
    let s1 = a ^ b
    let s2 = (a & b) << 1
    return getSum(s1, s2)
};
