/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = []
    for (let x of nums1) {
        let tmp = -1
        for (let j = nums2.length-1; j >= 0; j--) {
            if (nums2[j] > x) {
                tmp = nums2[j]
            }
            if (nums2[j] === x) {
                break
            }
        }
        res.push(tmp)
    }
    return res
};
