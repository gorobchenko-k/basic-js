const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor() {
    console.log(arguments[0])
    this.typeOfMachine = arguments[0] === undefined || arguments[0] === true ? true : false;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt() {
    if (arguments[0] && arguments[1]) {
      const message = arguments[0].toUpperCase();
      const key = arguments[1].toUpperCase();
      let result = '';
      let indexOfKey = 0;
      for (let index = 0; index < message.length; index++) {
        const symbol = message[index];
        const indexOfSymbol = this.alphabet.indexOf(symbol);
        if (indexOfSymbol >= 0) {
          const symbolOfKey = key[indexOfKey % key.length];
          const indexOfSymbolKey = this.alphabet.indexOf(symbolOfKey);
          const newIndexOfSymbol = (indexOfSymbol + indexOfSymbolKey) % this.alphabet.length;
          const newSymbol = this.alphabet[newIndexOfSymbol];
          result += newSymbol;
          indexOfKey++;
        } else {
          result += symbol;
        }
      }
      return this.typeOfMachine ? result : result.split('').reverse().join('');
    } else {
      throw new Error('Incorrect arguments!');
    }
  }
  decrypt() {
    if (arguments[0] && arguments[1]) {
      const message = arguments[0].toUpperCase();
      const key = arguments[1].toUpperCase();
      let result = '';
      let indexOfKey = 0;
      for (let index = 0; index < message.length; index++) {
        const symbol = message[index];
        const indexOfSymbol = this.alphabet.indexOf(symbol);
        if (indexOfSymbol >= 0) {
          const symbolOfKey = key[indexOfKey % key.length];
          const indexOfSymbolKey = this.alphabet.indexOf(symbolOfKey);
          const newIndexOfSymbol = ((indexOfSymbol - indexOfSymbolKey) > 0 ?
            indexOfSymbol - indexOfSymbolKey :
            indexOfSymbol - indexOfSymbolKey + this.alphabet.length) % this.alphabet.length;
          const newSymbol = this.alphabet[newIndexOfSymbol];
          result += newSymbol;
          indexOfKey++;
        } else {
          result += symbol;
        }
      }
      return this.typeOfMachine ? result : result.split('').reverse().join('');
    } else {
      throw new Error('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
