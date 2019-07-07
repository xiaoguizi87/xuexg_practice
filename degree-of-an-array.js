/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let left = {}
    let right = {}
    let times = {}
    for (let i = 0; i < nums.length; i++) {
        right[nums[i]] = i
        if (!(nums[i] in left)) {
            left[nums[i]] = i
            times[nums[i]] = 1
        } else {
            times[nums[i]] += 1
        }
    }
    let [maxTimes, minLen] = [0, 5000000]
    for (let x in times) {
        maxTimes = Math.max(maxTimes, times[x])
    }
    for (let x in times) {
        if (times[x] === maxTimes) {
            minLen = Math.min(minLen, right[x] - left[x] + 1)
        }
    }
    
    console.log(times, right, left)
    return minLen
};
