/* Digital Root
1. Sum each number by each of the given number e.g. 192 -> 1 + 9 + 2 -> 12 -> 1 + 2 -> 3
2. Split the given number by each number with `convertNumArr` function
3. `recursiveSumArr` to sum recursively till the length of array is 1.
*/
function digitalRoot(n) {
  return recursiveSumArr(convertNumToArr(n))[0];
}

function recursiveSumArr(arr) {
  const result = convertNumToArr(
    arr.reduce((acc, cur) => {
      acc = acc + cur;
      return acc;
    }, 0)
  );
  if (result.length > 1) {
    return recursiveSumArr(result);
  } else {
    return result;
  }
}

function convertNumToArr(n) {
  return Array.from(String(n), Number);
}

module.exports = { digitalRoot, recursiveSumArr, convertNumToArr };
