/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let layers = 0
    let res = ''
    for (let ch of S) {
        if (ch == ')') {
            layers--
        }
        if (layers != 0) {
            res += ch
        }
        if (ch == '(') {
            layers++
        }
    }
    return res
};
