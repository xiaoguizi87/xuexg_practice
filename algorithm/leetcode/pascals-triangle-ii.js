/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex <= 0) {
        return []
    }
    let row = [1]
    let index = 1
    while (index <= rowIndex) {
        let newRow = [0].concat(row)
        // console.log(newRow)
        row.push(0)
        for (let i = 0; i < row.length; i++) {
            row[i] += newRow[i]
        }
        index += 1;
    }
    return row
};

console.log(getRow(2))