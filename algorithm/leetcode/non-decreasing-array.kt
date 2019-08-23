class Solution {
    fun checkPossibility(nums: IntArray): Boolean {
        if (nums.size < 3) {
            return true
        }
        if (nums.size == 3) {
            return !(nums[0] > nums[1] && nums[1] > nums[2])
        }
        var prev = nums[0]
        var diff = 0
        var cur = 0
        for (i in 0 until nums.size) {
            cur = nums[i]
            if (prev > cur) {
                diff++
                if (diff >= 2) {
                    return false
                }
                if (i > 1 && i + 1 < nums.size && prev > nums[i+1] && nums[i-2] > cur) {
                    return false
                }
            }
            prev = cur
        }
        return true
    }
}
