/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [...Array(nums.length)].map(x=>1)
    let right = [...Array(nums.length)].map(x=>1)
    let res = [...Array(nums.length)].map(x=>1)
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i-1] * nums[i-1]
        right[nums.length - 1 - i] = right[nums.length - i] * nums[nums.length - i]
    }
    console.log(left)
    console.log(right)
    for (let i = 0; i < nums.length; i++) {
        res[i] = left[i] * right[i]
    }
    return res
};
