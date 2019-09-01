/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let times = timePoints.map(x => {
        return parseInt(x.substr(0, 2)) * 60 + parseInt(x.substr(3, 2))
    })
    
    times.sort((x, y) => x - y)
    console.log(times)
    times.push(times[0] + 1440)
    let res = 999999999
    for (let i = 1; i < times.length; i++) {
        res = Math.min(res, times[i] - times[i-1])
    }
    return res
};
