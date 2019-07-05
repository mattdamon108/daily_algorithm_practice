function main() {
  const sample1 = [1, 1, 1];
  const result = tribonacci(sample1, 10);
  console.log(result);
}

/* Tribonacci
1. Summing 3 prior numbers instead of summing 2 like fibonacci problem
2. Using reduce func for loop
3. Leave signature arg unchanged
*/

function tribonacci(signature, n) {
  if (n === 0) return [];
  if (n < 3) return signature.slice(0, n);

  const result = Array(n - 3)
    .fill(0)
    .reduce(
      (acc, _, i) => {
        acc.push(acc[i] + acc[i + 1] + acc[i + 2]);
        return acc;
      },
      [...signature]
    );

  return result;
}

main();
