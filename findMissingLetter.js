/* Find a missing letter
1. Using ascii for each char
2. If ascii value is not accumulated by 1, then return String.fromCharCode(arr[i].charCodeAt(0) + 1)
3. ;)
 */

function findMissingLetter(arr) {
  for (i of arr.keys()) {
    if (arr[i].charCodeAt(0) + 1 !== arr[i + 1].charCodeAt(0))
      return String.fromCharCode(arr[i].charCodeAt(0) + 1);
  }
}

module.exports = { findMissingLetter };
