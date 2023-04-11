const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  if (str === '') return '';
  result.push([1, str[0]]);

  for (let index = 1; index < str.length; index++) {
    if (str[index] === str[index - 1]) {
      result[result.length - 1][0] += 1;
    } else {
      result.push([1, str[index]]);
    }
  }
  return result.map(item => {
    return item[0] === 1 ? item[1] : item[0] + item[1];
  }).join('');
}

module.exports = {
  encodeLine
};
