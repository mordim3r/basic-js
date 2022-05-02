const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arr: [],
  getLength () 
  {
    return chainMaker.arr.length
  },
  addLink (value) 
  {
    this.arr.push(`( ${value} )`)
    return chainMaker
  },
  removeLink (position) 
  {
    if (
      position < 1 || position > this.arr.length || typeof position !== "number") 
      {
      this.arr = []
      throw new Error("You can't remove incorrect link!")
      }
    this.arr.splice(position - 1, 1)
    return chainMaker
  },
  reverseChain() 
  {
    //this.arr.reverse()
    //return chainMaker
  },
  finishChain () 
  {
    let finishArr = this.arr
    this.arr = []
    return finishArr.reduce((a, b) => `${a}~~${b}`)
  },
};

module.exports = {
  chainMaker
};
