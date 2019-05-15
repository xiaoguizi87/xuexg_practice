/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let m = A.length;
    let n = A[0].length;
    let B = []
    for (let i = 0; i < n; i++) {
        B[i] = []
        for (let j = 0; j < m; j++) {
            B[i][j] = A[j][i]
        }
    }
    return B
};
