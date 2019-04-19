/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let left = 0
    for (let right = 0; right < A.length; right++) {
        if (A[right] % 2 === 0) {
            let tmp = A[right]
            A[right] = A[left]
            A[left] = tmp
            left += 1
        }
    }
    return A
};
