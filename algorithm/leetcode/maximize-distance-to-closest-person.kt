import kotlin.math.max

class Solution {
    fun maxDistToClosest(seats: IntArray): Int {
        var i = 0
        var j = seats.size - 1
        while (seats[i] != 1) {
            i++
        }
        while (seats[j] != 1) {
            j--
        }
        var res = max(i, seats.size - 1 - j)
        var num = 0
        i++
        while (i <= j) {
            if (seats[i++] !=1) {
                num++
            } else {
                if (num >= 2 * res + 1) {
                    res = num / 2 + num % 2
                }
                num = 0
            }
        }
        return res
    }
}
