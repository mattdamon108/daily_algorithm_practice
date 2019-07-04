function main() {
  const s = "bitcoin take over the world maybe who knows perhaps";
  const result = findShort(s);
  console.log(result);
}

/* Find a shortest length of words
1. Split the given string by word
2. Compare each word by each using reduce func to find the shortest length word
3. then return the length of shortest word
*/

function findShort(s) {
  return s.split(" ").reduce((acc, cur) => {
    if (acc.length > cur.length) acc = cur;
    return acc;
  }).length;
}

main();
