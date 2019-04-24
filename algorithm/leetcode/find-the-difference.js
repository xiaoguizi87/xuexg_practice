/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let m = {}
    for (let ch of s) {
        m[ch] = (m[ch] || 0) + 1
    }
    for (let ch of t) {
        if (!m[ch]) {
            return ch
        }
        m[ch] -= 1
    }
};
