function main() {
  const result = divisors(15);
  console.log(result);
}

/* Divisors
 *
 * 1. Make an empty array with length of integer arg.
 * 2. Loop of each item kyes of empty array to check if it is divisors or not.
 * 3. Return array after getting rid of 1 and self, or string `${integer} is prime`
 *
 */

function divisors(integer) {
  const emptyArr = Array(integer).fill(0);
  let result = [];
  for (d of emptyArr.keys()) {
    if (integer % (d + 1) === 0) {
      result.push(d + 1);
    }
  }
  if (result.length === 2) return `${integer} is prime`;
  return result.slice(1, result.length - 1);
}

main();
