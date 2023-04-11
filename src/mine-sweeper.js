const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function getCountBomb(arrI, arrJ) {
    let count = 0;
    for (let i = arrI - 1; i <= arrI + 1; i++) {
      for (let j = arrJ - 1; j <= arrJ + 1; j++) {
        if (checkCeil(i, j) && (i !== arrI || j !== arrJ)) {
          if (matrix[i][j]) count++;
        }
      }
    }
    return count;
  }

  function checkCeil(i, j) {
    return (i >= 0 && j >= 0 && i < matrix.length && j < matrix[i].length);
  }

  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    result.push([]);
    for (let j = 0; j < arr.length; j++) {
      const count = getCountBomb(i, j);
      result[i].push(count);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
