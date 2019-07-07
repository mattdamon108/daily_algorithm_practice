/* Disemvowel Trolls : Removing all vowels except `y` in the given string

1. Using a regex /[aeiou]/gi
2. String.replace()
3. ;)

TEST: jest test/disemvowelTrolls.test.js
*/

function disemvowel(str) {
  const vowels = /[aeiou]/gi;
  return str.replace(vowels, "");
}

module.exports = { disemvowel };
