class Solution {
    fun distributeCandies(candies: IntArray): Int {
        var a = candies.toSet().size
        var b = candies.size / 2
        return if (a < b) a else b
    }
}
