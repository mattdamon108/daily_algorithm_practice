function main() {
  const result = divisors(15);
  console.log(result);
}

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
