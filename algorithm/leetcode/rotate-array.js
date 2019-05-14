/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums.length === 0) {
        return
    }
    k = k % nums.length
    let tmp = nums.slice(nums.length - k)
    for (let i = nums.length - 1; i >= k; i--){
        nums[i] = nums[i - k]
    }
    for (let i = 0; i < k; i++) {
        nums[i] = tmp[i]
    }
};
