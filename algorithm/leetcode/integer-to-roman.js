/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var number=[1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var s=['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    var res = ''
    
    for (let i = number.length - 1; i >= 0; i--) {
        while (num >= number[i]) {
            num -= number[i]
            res = res + s[i]
        }
    }
    return res
};
