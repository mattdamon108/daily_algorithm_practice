/* parseInt Reloaded
1. Firstly, I came up with lexing recursively the string.
2. I did try with recursive function `lexer` and check if `wasHundred` to get a correct sum following `thousand` or `million` not just numbers
3. But It can be solved with reduce function which does recursively works and accumulates the values.

<BEST>
var words = {
  "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, 
  "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, 
  "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50, 
  "sixty":60, "seventy":70, "eighty":80, "ninety":90
};
var mult = { "hundred":100, "thousand":1000, "million": 1000000 };
function parseInt(str) {
  return str.split(/ |-/).reduce(function(value, word) {
    if (words[word]) value += words[word];
    if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
    return value;
  },0);
}
 */

function parseInt(string) {
  strNums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90
  };
  strUnits = {
    hundred: 100,
    thousand: 1000,
    million: 1000000
  };

  const hyphenRemoved = string.toLowerCase().replace(/-/g, " ");
  const andRemoved = hyphenRemoved.replace(" and ", " ");
  const splitted = andRemoved.split(" ");

  let result = [];
  let sum = 0;
  let wasHundred = false;

  const lexer = arr => {
    const left = arr.shift();
    if (strNums[left]) {
      if (wasHundred) {
        result.push(result.pop() + strNums[left]);
      } else {
        sum += strNums[left];
      }
    } else if (strUnits[left]) {
      if (wasHundred) {
        const multipleUnit = result.pop() * strUnits[left];
        result.push(multipleUnit);
      } else {
        sum = sum * strUnits[left];
      }
      result.push(sum);
      sum = 0;
      if (left === "hundred") {
        wasHundred = true;
      } else {
        wasHundred = false;
      }
    }
    if (arr.length > 0) {
      lexer(arr);
    } else {
      result.push(sum);
      sum = 0;
      return;
    }
  };

  lexer(splitted);

  return result.reduce((acc, cur) => acc + cur);
}

module.exports = { parseInt };
