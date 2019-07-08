/* Unique in Order

1. Firstly, I mis-read a problem then I tried to solve this with `Set` to get a unique values in order.
2. I realized that this is not 100% unique value problem, then I use a iterator to solve it.
3. Trying to solve it without type-checking regardless of the given arg string or array.

RUN TEST : npm test test/uniqueInOrder.test.js
*/
function uniqueInOrder(iterable) {
  return Array.from(iterable).reduce((acc, cur) => {
    if (acc.slice(-1)[0] !== cur) acc.push(cur);
    return acc;
  }, []);
}

module.exports = { uniqueInOrder };
