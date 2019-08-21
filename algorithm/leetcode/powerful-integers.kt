class Solution {
    fun powerfulIntegers(x: Int, y: Int, bound: Int): List<Int> {
        val s = HashSet<Int>()
        var a = 1
        
        while (a <= bound) {
            var b = 1
            while (a + b <= bound) {
                s.add(a + b)
                b *= y
                if (y == 1) {
                    break
                }
            }
            a *= x
            if (x == 1) {
                break
            }
        }
        return s.toList()
    }
}
