/* MaxSequence

1. First time, I tried to solve it with O(n^1)
2. I approached to find a index by each side from left and from right to max the sum. But it has an error in case of left index > right index -> return 0
3. Try to think up using Max and Min to find a max case.

* BEST ANSWER
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

* TEST: npm run test test/maxSequence.test.js 
 */

function maxSequence(arr) {
  if (arr.length === 0) return 0;

  let subSum = -Infinity;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length + 1; j++) {
      const test = getArrSum(arr.slice(i, j));
      if (subSum < test) subSum = test;
    }
  }
  return subSum;
}

function getArrSum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

module.exports = { maxSequence, getArrSum };
