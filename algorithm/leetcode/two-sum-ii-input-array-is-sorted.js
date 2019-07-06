/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let s = {}
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i]
        if ((target - n) in s) {
            return [s[target-n] + 1, i + 1]
        }
        s[n] = i
    }
    return [-1, -1]
};
