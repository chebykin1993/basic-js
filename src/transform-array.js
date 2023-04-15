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
  let newArr = arr
  let pizda = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  if (Array.isArray(newArr) === false) {throw new Error('\'arr\' parameter must be an instance of the Array!')}

  for (let hui of newArr) {
    if (pizda.includes(hui) && newArr.indexOf(hui) === 0) {
       return arr.slice(newArr.indexOf(hui) + 1, -1)
    }
    if (pizda.includes(hui) && newArr.indexOf(hui) === -1) {
    return newArr.slice(0, newArr.length - 2)
    }

    if (hui === '--discard-next') {newArr.splice(newArr.indexOf(hui), 2)}
    if (hui === '--discard-prev') {newArr.splice(newArr.indexOf(hui) - 1, 2)}
    if (hui === '--double-next') {hui = newArr[newArr.indexOf(hui) + 1]}
    if (hui === '--double-prev') {hui = newArr[newArr.indexOf(hui) - 1]}
  }
  return newArr
}

module.exports = {
  transform
};
