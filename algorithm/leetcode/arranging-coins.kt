class Solution {
    fun arrangeCoins(n: Int): Int {
        var total = n
        var numInRow = 1
        var res = 0
        while (total >= numInRow) {
            total -= numInRow
            numInRow++
            res++
        }
        return res
    }
}
