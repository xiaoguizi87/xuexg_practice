/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let sortedNum = [...nums].sort((x, y) => x - y)
    // console.log(sortedNum)
    let [l, r] = [0, nums.length - 1]
    while (l <= r && sortedNum[l] === nums[l]) {
        l++
    }
    while (l <= r && sortedNum[r] === nums[r]) {
        r--
    }
    return r - l + 1
};
