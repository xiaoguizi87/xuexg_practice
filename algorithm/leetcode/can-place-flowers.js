/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed = [0, ...flowerbed, 0]
    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i-1] + flowerbed[i] + flowerbed[i+1] === 0) {
            n--
            i++
        }
        if (n <= 0) {
            return true
        }
    }
    return false
};
