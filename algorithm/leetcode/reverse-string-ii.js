/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let res = []
    for (let i = 0; i < s.length; i += 2*k) {
        res.push(reverse(s.substring(i, i+k)) + s.substring(i + k, i + 2 * k))
    }
    return res.join('')
};


var reverse = function(s) {
    let res = ''
    for (let c of s) {
        res = c + res
    }
    return res
}
