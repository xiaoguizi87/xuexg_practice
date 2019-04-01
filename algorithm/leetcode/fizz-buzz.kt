class Solution {
    fun fizzBuzz(n: Int): List<String> {
        val res = ArrayList<String>();
        for (i in 1..n) {
            if ((i % 3 == 0) and (i % 5 == 0)) {
                res.add("FizzBuzz")
            } else if (i % 3 == 0) {
                res.add("Fizz")
            } else if (i % 5 == 0) {
                res.add("Buzz")
            } else {
                res.add("" + i)
            }
        }
        return res;
    }
}

fun main() {
    var s = Solution();
    println(s.fizzBuzz(15));
}