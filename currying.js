/*
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
