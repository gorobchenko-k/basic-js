const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value = value === undefined ? '' : value;
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.getLength()) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.chain.join('~~');
    this.chain = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
