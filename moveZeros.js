/* moveZeros
1. Just use filter() and spread operator to concat both arrays
2. :)
3. ;)

 */

function moveZeros(arr) {
  return [...arr.filter(item => item !== 0), ...arr.filter(item => item === 0)];
}

module.exports = { moveZeros };
