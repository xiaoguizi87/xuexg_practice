/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    var low = 0;
    var high = parseInt(Math.sqrt(c));
    while (low <= high) {
        if (low*low == c - high * high) {
            return true
        }
        if (low*low < c - high * high) {
            low++
        } else {
            high--
        }
    }
    return false;
};