/**
 * @param {string[]} words
 * @return {number}
 */

var charToMorse = function(ch) {
    var table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    return table[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
}
var uniqueMorseRepresentations = function(words) {
    var s = new Set()
    for (let w of words) {
        var t = ''
        for (let c of w) {
            t += charToMorse(c)
        }
        s.add(t)
    }
    return s.size
};
