/**
 * @param {number[]} A
 * @return {boolean}
 */
var compare = function(a, b) {
    if (a == b) {
        return 0; 
    } else if (a > b) {
        return 1;
    }
    return -1;
}
var isMonotonic = function(A) {
    var store = 0
    for (var i = 0; i < A.length - 1; i++) {
        var c = compare(A[i], A[i+1]);
        if (c != 0) {
            if (c != store && store != 0) {
                return false
            }
            store = c
        } 
    }
    return true;
};
