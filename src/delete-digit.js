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
function deleteDigit(n) {
  let numArr = 0

    for (let hui of n.toString()) {
         let temp = n.toString().split('')
        temp.splice(temp.indexOf(hui), 1)
        if (numArr <= Number(temp.join(''))) {numArr = Number(temp.join(''))}
    }


 return numArr
}

module.exports = {
  deleteDigit
};
