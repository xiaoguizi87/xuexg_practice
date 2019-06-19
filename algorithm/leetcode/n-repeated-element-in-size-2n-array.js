/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let d = {}
    for (let a of A) {
        if (a in d) {
            d[a] += 1
            if (d[a] == A.length / 2) {
                return a
            }
        } else {
            d[a] = 1
        }
    }
};
