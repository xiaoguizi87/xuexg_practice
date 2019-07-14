/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (A.length < 3) {
        return false
    }
    let [up, down] = [false, false]
    for (let i = 1; i < A.length; i++) {
        if (A[i-1] < A[i] && !down) {
            up = true
        } else if (A[i-1] > A[i]) {
            down = true
        } else {
            return false
        }
    }
    return up && down
};
