/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] == 0) {
            let tmp = l - 1
            while (tmp - i > 1) {
                arr[tmp] = arr[tmp - 1]
                tmp--
            }
            arr[tmp] = 0
            i++
        }
    }
};
