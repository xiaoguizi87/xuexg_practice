/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = A.reduce((x, y) => x + y)
    if (sum % 3 !== 0) {
        return false
    }
    let avg = parseInt(sum / 3)
    let [i, j] = [0, A.length - 1]
    let [left, right] = [0, 0]
    while (i < j) {
        if (left != avg) {
            left += A[i]
            i++
        }
        if (right != avg) {
            right += A[j]
            j--
        }
        if (left === avg && right === avg) {
            return true
        }
    }
    return false
};
