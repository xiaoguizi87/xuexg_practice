/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

var compress = function(s) {
    let res = ''
    for (let ch of s) {
        if (ch === '#') {
            res = res.substring(0, res.length - 1)
        } else {
            res += ch
        }
    }
    return res
}

var backspaceCompare = function(S, T) {
    return compress(S) === compress(T)
};
