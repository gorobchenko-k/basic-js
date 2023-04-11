const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = n.toString();
  let maxN = nStr.slice(1);
  for (let index = 1; index < nStr.length; index++) {
      const n = nStr.slice(0, index) + nStr.slice(index + 1);
      if (n > maxN) maxN = n;
  }
  return +maxN;
}

module.exports = {
  deleteDigit
};
