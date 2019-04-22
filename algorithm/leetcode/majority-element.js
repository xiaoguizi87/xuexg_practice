/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cnt = 0
    let c = 0
    for (let n of nums) {
        if (cnt == 0) {
            c = n
        }
        if (n != c) {
            cnt--
        } else {
            cnt++ 
        }
        
    }
    return c
};
