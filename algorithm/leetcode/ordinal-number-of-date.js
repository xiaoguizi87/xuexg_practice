/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let year = + date.substr(0, 4)
    let month = + date.substr(5, 2)
    let day = + date.substr(8, 2)
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        days[1] += 1
    }
    
    let res = 0
    for (let i = 1; i < month; i++) {
        res += days[i-1]
    }
    res += day
    return res
};
