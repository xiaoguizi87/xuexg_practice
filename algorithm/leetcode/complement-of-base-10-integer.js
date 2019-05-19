/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    if (N === 0) {
        return 1
    }
    let count = 0
    let temp = N
    while (temp !== 0) {
        temp = (temp >> 1)
        count++
    }
    let res = 0
    while (count !== 0) {
        res *= 2
        res++
        count--
    }
    return res ^ N
};
