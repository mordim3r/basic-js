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
  arr1 = s1.split('')
  arr2 = s2.split('')
  let length
  let res = 0;
  if (arr1.length >= arr2.length)
  {
    length = arr1.length
  } else
  {
    length = arr2.length
  }
  for (let i = 0; i < length; i++) {
    let index = arr2.indexOf(arr1[i])
    if ((index >= 0) ) {
        arr2[index] = ''
        res++
    }
  }
  return res
}

module.exports = {
  getCommonCharacterCount
};
