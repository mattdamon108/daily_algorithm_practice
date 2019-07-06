function main() {
  const sample1 = "accum";
  const result = mumbling(sample1); // expected : A-Cc-Ccc-Uuuu-Mmmmm
  console.log(result);
}

/* Mumbling
1. Split word by each idiom
2. Make an array with the idiom and length of index
3. Join it to word and push it to accumulator in reduce func, then return the result after join it with "-"
*/

function mumbling(s) {
  return s
    .split("")
    .reduce((acc, cur, i) => {
      let mumbled = Array(i + 1).fill(cur.toLowerCase());
      mumbled[0] = mumbled[0].toUpperCase();
      return [...acc, mumbled.join("")];
    }, [])
    .join("-");
}

main();
