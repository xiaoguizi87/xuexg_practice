/**
 * @param {string} s
 * @return {string}
 */
var reverse = function(x) {
    let res = ''
    for (let c of x) {
        res = c + res
    }
    return res
}

var reverseWords = function(s) {
    let words = s.split(' ')
    return words.map(x => reverse(x)).join(' ')
};
