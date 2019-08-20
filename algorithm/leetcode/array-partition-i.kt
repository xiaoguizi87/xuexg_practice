class Solution {
    fun arrayPairSum(nums: IntArray): Int {
        return nums.sorted().withIndex().filter {(i, v) -> i % 2 == 0}.sumBy {(i, v)-> v}
    }
}
