const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const separator = options.hasOwnProperty('separator') ? options.separator : '+';
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';

  const repeatTimes = typeof options.repeatTimes === "number" ? options.repeatTimes : 1;
  const additionRepeatTimes = typeof options.additionRepeatTimes === "number" ? options.additionRepeatTimes : 1;
  function repeatElement(str, repeateTimes) {
    return [].concat(...Array(repeateTimes).fill(str));
  }

  let additionStr = repeatElement(addition, additionRepeatTimes).join(additionSeparator);

  return repeatElement(String(str) + additionStr, repeatTimes).join(separator);
}

module.exports = {
  repeater
};
