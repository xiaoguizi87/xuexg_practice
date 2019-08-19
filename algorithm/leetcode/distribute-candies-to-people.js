/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let idx = 0
    let res = Array.from({length: num_people}).fill(0)
    let delta = 1
    while (candies > 0) {
        let diff = candies > delta ? delta : candies
        candies -= diff
        res[idx] += diff
        delta++
        idx++
        if (idx === num_people) {
            idx = 0
        }
    }
    return res
};
