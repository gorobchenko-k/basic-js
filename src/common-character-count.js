const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let coutn = 0;
  for (let index = 0; index < s1.length; index++) {
    const character = s1[index];
    const indexOfCharacter = s2.indexOf(character);
    if (indexOfCharacter >= 0) {
      s2 = s2.slice(0, indexOfCharacter) + s2.slice(indexOfCharacter + 1);
      coutn++;
    }
  }

  return coutn;
}

module.exports = {
  getCommonCharacterCount
};
