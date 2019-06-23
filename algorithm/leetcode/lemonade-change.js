/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0
    let ten = 0
    
    for (let b of bills) {
        if (b == 5) {
            five++
        } else if (b == 10 && five > 0) {
            five--
            ten++
        } else if (b == 0) {
            return false
        } else if (ten > 0 && five > 0) {
            five--
            ten--
        } else if (five >= 3) {
            five -= 3
        } else {
            return false
        }
    }
    return true
};
