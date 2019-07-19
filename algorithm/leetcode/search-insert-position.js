/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let [left, right] = [0, nums.length]
    while (left < right) {
        let mid = parseInt((left + right) / 2)
        if (nums[mid] >= target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};
