/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    target = Math.abs(target)
    let sum = 0
    let step = 1
    while (true) {
        sum += step
        if (sum >= target && (sum - target) % 2 === 0) {
            return step
        }
        step++
    }
};
