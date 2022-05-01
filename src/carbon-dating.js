const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (Number(sampleActivity) > 0 && Number(sampleActivity) < 15 && typeof Number(sampleActivity) == "number" && typeof sampleActivity == "string") 
  {
    result = Math.ceil((HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / 0.693)
    return result
  } 
  else 
  {
    return false
  }
}

module.exports = {
  dateSample
};
