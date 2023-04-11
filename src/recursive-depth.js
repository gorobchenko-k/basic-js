const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let deepthItems = [];
    arr.forEach(item => {
      if (Array.isArray(item)) {
        deepthItems.push(this.calculateDepth(item))
      } else {
        deepthItems.push(0);
      }
    });

    let maxDepth = Math.max(...deepthItems);
    return maxDepth < 0 ? 1 : maxDepth + 1;
  }
}

module.exports = {
  DepthCalculator
};
