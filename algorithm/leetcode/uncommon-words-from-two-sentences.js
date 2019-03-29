/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    var arr1 = A.split(" ");
    var arr2 = B.split(" ");
    arr1 = arr1.concat(arr2);
    var d = new Map();
    arr1.forEach(function (x) {
        if (!d[x]) {
            d[x] = 1;
        } else {
            d[x] = d[x] + 1;
        }
    });
    // console.log(d);
    var res = [];
    for (var k in d) {
        if (d[k] === 1) {
            res.push(k);
        }
    }
    return res;
};