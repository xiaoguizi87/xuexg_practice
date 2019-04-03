class Solution {
    fun convertToBase7(num: Int): String {
        if (num == 0) {
            return "0"
        }
        val isMinus = if (num > 0) false else true
        var temp = if (isMinus) -num else num
        var res = ""
        while (temp > 0) {
            res = "" + (temp % 7) + res
            temp /= 7
        }
        if (isMinus) {
            res = '-' + res
        }
        return res
    }
}