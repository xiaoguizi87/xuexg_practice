/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    A.sort((x, y) => x - y)
    console.log(A)
    let i = 0
    for ( ; i < A.length && K > 0 && A[i] < 0; i++, K--) {
        A[i] = - A[i]
    }
    let s = 0
    let min = 999999999
    for (let n of A) {
        s += n
        min = Math.min(min, n)
    }
    if (K % 2 !== 0) {
        s -= 2 * min
    }
    return s
};
