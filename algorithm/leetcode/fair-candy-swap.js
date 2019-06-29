/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

var sum = function(array) {
    var s = 0
    for (let x of array) {
        s += x
    }
    return s
};

var fairCandySwap = function(A, B) {
    let sa = sum(A)
    let sb = sum(B)
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (sa - A[i] + B[j] === sb - B[j] + A[i]) {
                return [A[i], B[j]]
            }
        }
    }
};
