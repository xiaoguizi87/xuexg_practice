/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    var root = parseInt(Math.sqrt(area))
    for (var i = root; i >= 1; i--) {
        if (area % i === 0) {
            return [area / i, i]
        }
    }
};
