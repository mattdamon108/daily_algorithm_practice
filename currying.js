/* Currying
1. Firstly, I tried to implement it with recursive function, but there's a problem to compute args.
2. I searched how to implement and compute in currying.
3. Check `Object.valueOf` method to return primitive value of object
 */

// TODO: check the testing cases
function add(n) {
  const nums = [];
  const currying = m => {
    nums.push(m);
    return currying;
  };

  currying.valueOf = () => nums.reduce((acc, cur) => acc + cur, n);

  return currying;
}

module.exports = { add };
