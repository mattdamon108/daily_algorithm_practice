/* Detect Pangram
1. Using ascii value to check if str has all kind of alphabetical chars in the given str.
2. Use a `Set()`
3. There would be another good way to check if the array has incremental integer values.
 */

function isPangram(str) {
  const tester = [];
  for (i of str.split("")) {
    // ascii value range: tester = [65 - 90]
    const asciiValue = i.toUpperCase().charCodeAt(0);
    // The target is to check whether it has all the alphabetical chars from A-Z or a-z,
    // hence, push only alphabetical chars into tester array
    if (asciiValue >= 65 && asciiValue <= 90) tester.push(asciiValue);
  }

  if ([...new Set(tester)].reduce((acc, cur) => acc + cur, 0) === 2015)
    return true;
  return false;
}

module.exports = { isPangram };
