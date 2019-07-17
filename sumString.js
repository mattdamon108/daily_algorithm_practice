/* Sum String
1. This is quite similar to the problem `AddBigNumbers`
2. But, only different part is removing the `0` in front of result
3. BE CAREFUL OF using while

TEST: npm run test:watch test/sumString.test.js
 */

function sumString(a, b) {
  let abacus = "";
  let c = 0;
  const arrA = a.split("");
  const arrB = b.split("");
  while (arrA.length || arrB.length || c) {
    c += ~~arrA.pop() + ~~arrB.pop();
    abacus = (c % 10) + abacus;
    c = c > 9;
  }
  while (abacus.split("").shift() === "0") {
    abacus = abacus
      .split("")
      .slice(1)
      .join("");
  }
  return abacus;
}

module.exports = { sumString };
