/* Partitions
1. I googled the solution and found the python code, then I converted it to JS.
2. I tried to solve with recursive function, which is a correct approach.
3. But, really I can't understand the best solutions. :(

<BEST1>
const products = (n) => {
  let seen = new Set([n]);
  for (let i = 1; i <= n-1; i++) {
      if ( !(memo[n-i]) ) {
        memo[n-i] = products(n-i);
      }
      memo[n-i].forEach(prod => {
        seen.add(prod*i)
      })
  }
  return [...seen]
}

<BEST2>
function prod(n) {
  let prods = []
  let it = (t,p,m) => {
    if (!prods.includes(p)) prods.push(p)
    for (let i = 2; i <= m && t+i <= n; i++) it(t+i, p*i, i)
  }
  
  it(0,1,n)
  return prods.sort((a,b)=>b-a)
}
 */
function part(n) {
  let p = Array(n).fill(0);
  let k = 0;
  p[k] = n;

  let result = [];

  while (1) {
    result.push(p.slice(0, k + 1).reduce((acc, cur) => acc * cur));

    let remVal = 0;
    while (k >= 0 && p[k] === 1) {
      remVal += p[k];
      k -= 1;
    }

    if (k < 0) {
      break;
    }

    p[k] -= 1;
    remVal += 1;

    while (remVal > p[k]) {
      p[k + 1] = p[k];
      remVal = remVal - p[k];
      k += 1;
    }

    p[k + 1] = remVal;
    k += 1;
  }

  result = [...new Set(result)].sort((a, b) => a - b);
  const range = result[result.length - 1] - 1;
  const avg = result.reduce((acc, cur) => acc + cur) / result.length;
  let median = 0;
  if (result.length % 2 === 0) {
    median = (result[result.length / 2 - 1] + result[result.length / 2]) / 2;
  } else {
    median = result[Math.floor(result.length / 2)];
  }
  return `Range: ${range} Average: ${avg.toFixed(2)} Median: ${median.toFixed(
    2
  )}`;
}

module.exports = { part };
