/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let [x, y] = [0, 0]
    for (let m of moves) {
        if (m === 'U') {
            y += 1
        } else if (m === 'D') {
            y -= 1
        } else if (m === 'R') {
            x += 1
        } else {
            x -= 1
        }
    }
    return x === 0 && y === 0
};
