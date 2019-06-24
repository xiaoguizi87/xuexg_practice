/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let st = {}
    let [i, ans] = [0, 0]
    for (let j = 0; j < s.length; j++) {
        if (s[j] in st) {
            i = Math.max(st[s[j]], i)
        }
        ans = Math.max(ans, j - i + 1)
        st[s[j]] = j + 1
    }
    return ans
};
