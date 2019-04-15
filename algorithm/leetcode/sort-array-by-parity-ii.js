/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let odd = A.filter(x => x % 2 != 0)
    let even = A.filter(x => x % 2 == 0)
    let result = []
    for (let i = 0; i < even.length; i++) {
        result.push(even[i])
        result.push(odd[i])
    }
    return result
};
