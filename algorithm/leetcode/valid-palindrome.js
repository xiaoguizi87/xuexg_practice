/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/\W/g, '').toLowerCase()
    const rstr = [...str].reverse().join('')
    return str === rstr
};
