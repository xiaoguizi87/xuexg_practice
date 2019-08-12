/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let old = [...heights]
    heights.sort((x, y) => x - y)
    let count = 0
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== old[i]) {
            count++
        }
    }
    return count
};
