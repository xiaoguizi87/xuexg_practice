/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  var temp = num;
  var c = 0;
  while (temp > 0) {
    temp >>= 1;
    c = (c << 1) + 1;
  }
  return c ^ num;
};
