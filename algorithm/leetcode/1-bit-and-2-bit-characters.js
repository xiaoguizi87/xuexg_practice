/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let idx = 0
    while (idx < bits.length - 1) {
        idx += (bits[idx] == 0) ? 1 : 2
    }
    return idx == bits.length - 1
};
