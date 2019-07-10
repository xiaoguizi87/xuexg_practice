/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let dict = {}
    for (let n of nums) {
        dict[n] = (dict[n] || 0) + 1
    }
    let res = 0
    console.log(dict)
    for (let n of nums) {
        let less = dict[n - 1] || 0
        let greater = dict[n + 1] || 0
        res = Math.max(less + dict[n], res)
        res = Math.max(greater + dict[n], res)
    }
    return res
};
