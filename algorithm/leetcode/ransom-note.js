/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let d1 = toDict(ransomNote)
    let d2 = toDict(magazine)
    
    for (let k in d1) {
        let c = d2[k] || 0
        if (d1[k] > c) {
            return false
        }
    }
    return true
};

var toDict = function(s) {
    let d = {}
    for (let ch of s) {
        d[ch] = (d[ch] || 0) + 1
    }
    return d
}
