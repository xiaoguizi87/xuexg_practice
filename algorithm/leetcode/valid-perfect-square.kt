class Solution {
    fun isPerfectSquare(num: Int): Boolean {
    
        var r = num.toLong()
        while (r * r > num) {
            r = (r + num / r) / 2
        }
        return r * r == num.toLong()
    }
}
