class Solution {
    fun dominantIndex(nums: IntArray): Int {
        if (nums.size == 1) {
            return 0
        }
        var max0 = 0
        var max1 = 0
        var max0_index = -1
        var i = 0
        for (n in nums) {
            if (n >= max0) {
                max1 = max0
                max0 = n
                max0_index = i
            } else if ((n >= max1) and (n <= max0)) {
                max1 = n
            }
            i++
        }
        max1 *= 2
        return if (max0 >= max1) max0_index else -1
    }
}
