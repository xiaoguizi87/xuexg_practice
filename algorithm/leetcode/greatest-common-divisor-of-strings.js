/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcd = function(a, b) {
    
    return b === 0 ? a : gcd(b, a % b)    
}

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return ''
    }
    return str1.substr(0, gcd(str1.length, str2.length))
};
