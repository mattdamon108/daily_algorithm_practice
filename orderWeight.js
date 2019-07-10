/* Order Weight
1. Firstly, I tried to solve it with making object which has key as a sum and value as an original value, e.g. { 1: "100", 18: "99", ...}
2. But, It makes a wrong in case some of weight could be same to be dropped in object.
3. Finally, I solved this using `sort()` in two options, one is to sort of number value(sum), the other is to sort of string using `String.localeCompare()`

TEST: npm run test test/orderWeight.test.js
 */

function orderWeight(str) {
  return str
    .split(" ")
    .sort((a, b) => {
      const test = calcSum(a) - calcSum(b);
      if (test !== 0) return test;
      return a.localeCompare(b);
    })
    .join(" ");
}

function calcSum(str) {
  return Array.from(str.trim(), Number).reduce((acc, cur) => acc + cur, 0);
}

module.exports = { orderWeight, calcSum };
