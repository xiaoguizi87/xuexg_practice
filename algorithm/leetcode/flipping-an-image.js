/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let B = []
    for (let r of A) {
        let nr = []
        for (let i = r.length - 1; i >= 0; i--) {
            nr.push(1 - r[i])
        }
        B.push(nr)
    }
    return B
};
