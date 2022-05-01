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
function deleteDigit(n) 
{
  let count = 0;
  let arr = n.toString().split('')
  for(let i = 0; i < arr.length; i++) 
  {
    let num = arr.splice(i, 1)[0]
    let temp = parseInt(arr.join(''))
    if(temp > count) 
    {
      count = temp;
    }
    arr.splice(i, 0, num)
  }
  return count;
}

module.exports = {
  deleteDigit
};
