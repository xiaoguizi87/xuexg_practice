/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

var isZiChu = function(n) {
    let s = '' + n
    let flag = true
    for (let c of s) {
        let cn = parseInt(c)
        // console.log(c)
        if (cn === 0 || n % cn !== 0) {
            flag = false
            break
        }
    }
    
    return flag
}

var selfDividingNumbers = function(left, right) {
    let res = []
    for (let i = left; i <= right; i++) {
        if (isZiChu(i)) {
            res.push(i)
        }
    }
    return res
};
