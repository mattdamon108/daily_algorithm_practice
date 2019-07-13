/* Perimeter
1. Using for(let i = 0; ...) loop is the easiest solution.
2. But I tried it without it.
3. Make fibonacci array and get sum using `reduce()`

TEST: npm run test:watch test/perimeter.test.js
 */

function perimeter(n) {
  return (
    Array(n + 1)
      .fill(0)
      .reduce(
        (acc, _, i) => {
          if (i === 0) return { fibonacci: [1], sum: 0 };
          if (i === 1) return { fibonacci: [1, 1], sum: 2 };
          return {
            fibonacci: [
              ...acc.fibonacci,
              acc.fibonacci[i - 2] + acc.fibonacci[i - 1]
            ],
            sum: acc.sum + acc.fibonacci[i - 2] + acc.fibonacci[i - 1]
          };
        },
        { fibonacci: [], sum: 0 }
      ).sum * 4
  );
}

module.exports = { perimeter };
