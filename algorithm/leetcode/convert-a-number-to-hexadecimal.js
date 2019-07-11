/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (!num) {
        return '0'
    }
    num = num > 0 ? num : num + 2 ** 32
    let hex = '0123456789abcdef'
    let res = ''
    while (num) {
        res = hex[num % 16] + res
        num = parseInt(num / 16)
    }
    return res
};
