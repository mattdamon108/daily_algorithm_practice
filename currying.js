/* Currying
1. Firstly, I tried to implement it with recursive closure, but there's a problem to compute args.
2. I searched how to implement and compute in currying.
3. Check `Object.valueOf` method to return primitive value of object
 */

// TODO: check the testing cases
function add(n) {
  let sum = n;
  const currying = m => {
    sum += m;
    return currying;
  };

  currying.valueOf = () => sum;

  return currying;
}

module.exports = { add };
