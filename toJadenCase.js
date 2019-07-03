function main() {
  const str = "How can mirrors be real if our eyes aren't real";
  const result = toJadenCase(str);
  console.log(result);
}

/* Jaden-Case
 *
 * Actually, this exercise is to manipulate String.prototype like `String.prototype.toJadenCase`, but this is just make a function `toJadenCase`
 *
 * 1. Split by word
 * 2. Split by each idiom and convert first idiom to uppercase.
 * 3. Joining again
 *
 *
 * String.prototype.toJadenCase = function () {
 *   let result = [];
 *   for (w of this.split(" ")) {
 *     const splittedWord = w.split("");
 *     splittedWord[0] = splittedWord[0].toUpperCase();
 *   result.push(splittedWord.join(""));
 *   }
 *
 *  return result.join(" ");
 *  };
 */

function toJadenCase(str) {
  let result = [];
  for (w of str.split(" ")) {
    const splittedWord = w.split("");
    splittedWord[0] = splittedWord[0].toUpperCase();
    result.push(splittedWord.join(""));
  }

  return result.join(" ");
}

main();
