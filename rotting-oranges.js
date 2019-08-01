/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let [nx, ny, step] = [grid.length, grid[0].length, 0]
    let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let queue = []
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0])                
            }        
        }
    }
    while (queue.length > 0) {
        let [x, y, time] = queue.shift()
        step = time
        for (let d of dirs) {
            let [newx, newy] = [x + d[0], y + d[1]]
            if (newx >= 0 && newx < nx && newy >= 0 && newy < ny && grid[newx][newy] == 1) {
                grid[newx][newy] = 2
                queue.push([newx, newy, time + 1])
            }
        }
    }
    
    for (let r of grid) {
        if (r.includes(1)) {
            return -1
        }
    }
    return step
};
