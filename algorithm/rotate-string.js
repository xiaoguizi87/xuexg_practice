/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (A === '' && B === '') {
        return true
    }
    for (let i = 1; i < A.length + 1; i++) {
        if (A.substr(i) + A.substr(0, i) === B) {
            return true
        }
    }
    return false
};
