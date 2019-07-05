function main() {
  const sample1 = [];
  const sample2 = ["Alex"];
  const sample3 = ["Alex", "Jacob"];
  const sample4 = ["Alex", "Jacob", "Mark"];
  const sample5 = ["Alex", "Jacob", "Mark", "Max"];
  const result = likes(sample1);
  console.log(result);
}

/* Find a shortest length of words
1. Use switch as per the length of names arg
2. Return string in case of how many names in the array
3. Handle 4 more names in array with default
*/

function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length -
        2} others like this`;
  }
}

main();
