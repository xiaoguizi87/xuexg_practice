/**
 * @param {number[][]} costs
 * @return {number}
 */
var comp = function(a, b) {
    return (a[0] - a[1]) - (b[0] - b[1])
}

var twoCitySchedCost = function(costs) {
    costs.sort(comp)
    console.log(costs)
    let N = parseInt(costs.length / 2)
    let left = costs.slice(0, N).reduce((acc, x) => acc + x[0], 0) 
    let right = costs.slice(N).reduce((acc, x) => acc + x[1], 0)
    return left + right
};
