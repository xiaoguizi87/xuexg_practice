class Solution {
    fun isHappy(n: Int): Boolean {
        var nn = n
        var s = HashSet<Int>()
        while (nn != 1) {
            if (nn in s) {
                return false
            }
            s.add(nn)
            var total = 0
            var t = nn
            while (t > 0) {
                val a = t % 10
                t /= 10
                total += a * a
            }
            nn = total
        }
        return true
    }
}