class Solution {
    fun prefixesDivBy5(A: IntArray): BooleanArray {
        var res = BooleanArray(A.size)
        var tmp = 0
        for ((i, x) in A.withIndex()) {
            tmp = (tmp * 2 + x) % 5
            res[i] = tmp == 0
        }
        return res
    }
}
