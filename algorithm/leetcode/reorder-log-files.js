/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let zimus = [];
    let numbers = [];
    for (let log of logs) {
        let last = log.substring(log.indexOf(' '))
        // 后半部分都是由数字空格组成
        if (last.match(/^[0-9 ]+$/)) {
            numbers.push(log)
        } else {
            zimus.push(log)
        }
    }
    console.log(zimus)
    zimus.sort((x, y) => {
        let a1 = x.substring(0, x.indexOf(' '))
        let a2 = x.substring(x.indexOf(' ') + 1)
        let b1 = y.substring(0, y.indexOf(' '))
        let b2 = y.substring(y.indexOf(' ') + 1)
        // sort函数，当x, y比较时，x在前需要返回-1,y在前需要返回1
        if (a2 == b2) {
            return a1 < b1 ? -1 : 1
        } else {
            return a2 < b2 ? -1 : 1
        }
    })
    return [...zimus, ...numbers]
};
