/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let [cur, pre] = [1, 0]
    let res = 0
    for (let i = 1; i < s.length ; i++) {
        if (s[i] === s[i-1]) {
            cur += 1
        } else {
            pre = cur
            cur = 1
        }
        if (pre >= cur) {
            res++
        }
    }
    return res
};
