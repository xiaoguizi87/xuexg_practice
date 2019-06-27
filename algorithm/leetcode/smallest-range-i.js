/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    let maxv = Math.max(...A)
    let minv = Math.min(...A)
    if (maxv - minv >= 2 * K) {
        return maxv - minv - 2 * K
    }
    return 0
};
