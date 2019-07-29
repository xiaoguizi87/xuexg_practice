/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) {
        return image
    }
    let [nr, nc] = [image.length, image[0].length]
    let oc = image[sr][sc]
    function dfs(x, y) {
        image[x][y] = newColor
        if (x > 0 && image[x-1][y] === oc) {
            dfs(x-1, y)
        }
        if (x < nr -1 && image[x+1][y] === oc) {
            dfs(x+1, y)
        }
        if (y > 0 && image[x][y-1] === oc) {
            dfs(x, y-1)
        }
        if (y < nc-1 && image[x][y+1] === oc) {
            dfs(x, y+1)
        }

    }
    dfs(sr, sc)
    return image
};
