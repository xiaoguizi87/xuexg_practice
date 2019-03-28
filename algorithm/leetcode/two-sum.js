var twoSum = function (nums, target) {
    let s = new Map();
    // 字典以前面的数作为key, index做为value
    for (let i = 0; i < nums.length; i++) {
        // target - nums[i] 在字典中，说明当前数跟之前的数的和为target
        if ((target - nums[i]) in s) {
            return [s[target - nums[i]], i];
        }
        s[nums[i]] = i;
    }
};
// console.log(twoSum([2, 7, 11, 15], 9));
// console.assert(twoSum([2, 7, 11, 15], 9) == [0, 1])