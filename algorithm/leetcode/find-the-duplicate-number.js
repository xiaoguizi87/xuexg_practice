/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for (let n of nums) {
        let t = Math.abs(n)
        if (nums[t] < 0) {
            return t
        }
        nums[t] = -nums[t]
    }    
};
