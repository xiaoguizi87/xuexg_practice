/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let [x1, y1, x2, y2] = rec1;
    let [xx1, yy1, xx2, yy2] = rec2;
    if (x2 <= xx1 || x1 >= xx2) {
        return false    
    }
    if (y2 <= yy1 || y1 >= yy2) {
        return false
    }
    return true
};
