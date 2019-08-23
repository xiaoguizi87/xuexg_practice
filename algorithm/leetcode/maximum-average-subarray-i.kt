import kotlin.math.max

class Solution {
    fun findMaxAverage(nums: IntArray, k: Int): Double {
        var res = nums.slice(0..k-1).sum()
        println(res)
        var maxRes = res
        for (i in k until nums.size ) {
            res = res - nums[i-k] + nums[i]
            maxRes = max(res, maxRes)
        }
        return maxRes / k.toDouble()
    }
}
