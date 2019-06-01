/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var s1 = new Set(nums1)
    var s2 = new Set(nums2)
    return [...s1].filter(x => s2.has(x))
};
