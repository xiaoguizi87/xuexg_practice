/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let s = '1'
    while (n-- > 1) {
        let temp = ''
        let cand = s[0]
        let count = 1
        for (let i = 1; i < s.length; i++) {
            if (s[i] === cand) {
                count++
            } else {
                temp = temp + ('' + count + cand)
                count = 1
                cand = s[i]
            }
        }
        temp = temp + ('' + count + cand)
        s = temp
    }
    return s
};
