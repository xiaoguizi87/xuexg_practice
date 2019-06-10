/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0
    while (x > 0 || y > 0) {
        count += (x & 1) ^ (y & 1)
        x = x >> 1
        y = y >> 1
    }
    return count
};