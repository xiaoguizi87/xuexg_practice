/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num === 0) {
        return false
    }
    let fators = [2, 3, 5]
    for (let f of fators) {
        while (num % f === 0) {
            num = parseInt(num / f)
        }
    }
    return num === 1
};
