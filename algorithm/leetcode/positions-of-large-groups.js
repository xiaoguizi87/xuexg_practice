/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let i = 0
    let res = []
    while (i < S.length) {
        let j = i
        while (j + 1 < S.length && S[j+1] === S[i]) {
            j++
        }
        if (j - i >= 2) {
            res.push([i, j])
        }
        i = j + 1
    }
    return res
};
