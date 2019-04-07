class Solution {
    fun maximumProduct(nums: IntArray): Int {
        nums.sort()
        val a = nums[0] * nums[1] * nums[nums.size - 1]
        val b = nums[nums.size - 1] * nums[nums.size - 2] * nums[nums.size - 3]
        return if (a > b) a else b
    }
}