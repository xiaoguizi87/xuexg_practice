class Solution {
    fun fib(N: Int): Int {
        if (N == 0) {
            return 0
        } else if (N == 1) {
            return 1
        }
        return fib(N - 1) + fib(N - 2)
    }
}
