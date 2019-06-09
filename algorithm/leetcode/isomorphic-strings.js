
var isIsomorphic = function(nums1, nums2) {
    for (let i = 0; i < nums1.length; i++) {
        if (nums1.substring(i+1).indexOf(nums1[i]) != nums2.substring(i+1).indexOf(nums2[i]) ) {
            return false
        }
    }
    return true
};
