/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((x, y) => x - y)
    nums2.sort((x, y) => x - y)
    let [i, j] = [0, 0]
    let res = []
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) {
            j++
        } else if (nums1[i] < nums2[j]) {
            i++
        } else {
            res.push(nums1[i])
            i++
            j++
        }
    }
    return res
};
