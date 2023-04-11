const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let res = arr.slice(0);
  for (let index = 0; index < res.length; index++) {
    const element = res[index];
    if (element === '--discard-next') {
      res[index] = null;
      res[index + 1] = null;
      index++;
    } else if (element === '--discard-prev') {
      res[index - 1] = null;
      res[index] = null;
    } else if (element === '--double-next') {
      res[index] = (index + 1) < res.length ? res[index + 1] : null;
    } else if (element === '--double-prev') {
      res[index] = (index - 1) >= 0 ? res[index - 1] : null;
    }
  }

  return res.filter(item => item !== null);
}

module.exports = {
  transform
};
