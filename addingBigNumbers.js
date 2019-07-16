/* Adding Big Numbers
1. ~~ bit operator can be used to convert type string to int
2. true or false can be type coersion to 1 or 0
3. BEST answer is the BEST

<BEST>
function add(a, b) {
  let abacus = "";
  let c = 0;
  const arrA = Array.from(a, Number);
  const arrB = Array.from(b, Number);
  while (arrA.length || arrB.length) {
    c += ~~arrA.pop() + ~~arrB.pop();
    abacus = (c % 10) + abacus;
    c = c > 9;
  }
  return abacus;
}
 */

function add(a, b) {
  let abacus = [];
  const reversedA = Array.from(a, Number).reverse();
  const reversedB = Array.from(b, Number).reverse();
  for (let i = 0; i < Math.max(reversedA.length, reversedB.length); i++) {
    const a = reversedA[i] ? reversedA[i] : 0;
    const b = reversedB[i] ? reversedB[i] : 0;
    if (abacus.slice(-1) > 9) {
      const latestOne = abacus.pop();
      abacus.push(latestOne - 10);
      abacus.push(a + b + 1);
    } else {
      abacus.push(a + b);
    }
  }
  return abacus.reverse().join("");
}

module.exports = { add };
