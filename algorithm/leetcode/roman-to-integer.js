/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0
    let m = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500],
                    ['M', 1000]])
    for (let i = 0; i < s.length; i++) {
        res += m.get(s[i])
        if (i > 0 && m.get(s[i]) > m.get(s[i-1])) {
            res = res - 2 * m.get(s[i-1])
        }
    }
    return res
};
