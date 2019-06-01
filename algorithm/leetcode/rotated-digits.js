/**
 * @param {number} N
 * @return {number}
 */

var isGoodNumber = function(n) {
    var s = String(n)
    var flag = false
    for (let ch of s) {
        if ('347'.includes(ch)) {
            return false
        }
        if ('2569'.includes(ch)) {
            flag = true
        }
    }
    return flag
}

var rotatedDigits = function(N) {
     var count = 0
     for (let i = 1; i <= N; i++) {
         if (isGoodNumber(i)) {
             count += 1
         }
     }
    return count
};
