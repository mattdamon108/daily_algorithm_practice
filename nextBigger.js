/* nextBigger
The function to find a very next bigger integer against the given number

1. Slicing from end to start and check if any bigger integer from first integer in sliced number
2. But, find the smallest gap from the first integer which makes very next bigger number
3. Then, switch the very next bigger integer with first integer and ascending the rest of integer in sliced number

const deletedArr = Array.splice(start, deleteCount, addedItem1, addedItem2)

e.g.

const a = [1, 2, 3]
const b = a.splice(1)

-> a = [1]
-> b = [2, 3]

 */

function nextBigger(n) {
  const arrN = String(n).split("");
  for (let i = arrN.length - 1; i >= 0; i--) {
    const test = arrN.slice(i, arrN.length);
    const indexOfBigger = findBigNumber(test);
    if (indexOfBigger) {
      const buf = test[0];
      test[0] = test[indexOfBigger];
      test[indexOfBigger] = buf;

      const ascendingTest = makeAscending(test.slice(1));
      const unTested = arrN.slice(0, i);
      return Number([...unTested, test[0], ...ascendingTest].join(""));
    }
  }
  return -1;
}

function findBigNumber(arr) {
  let index = 0;
  let min = 10;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) > Number(arr[0])) {
      const test = Number(arr[i]) - Number(arr[0]);
      if (min > test) {
        index = i;
        min = test;
      }
    }
  }
  return index === 0 ? null : index;
}

function makeAscending(arr) {
  return arr.sort((a, b) => Number(a) - Number(b));
}

module.exports = {
  nextBigger,
  findBigNumber
};
