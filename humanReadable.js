/* Human readable time
1. It seems very easy problem regarding it is 6kyu. But it turns out quite a math problem.
2. `parseInt()` can be used as `Math.floor()`
3. This shows that the remainer would be a minutes and seconds

BEST answer

function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}

 */

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const restSeconds = seconds - hours * 3600 - minutes * 60;
  return [
    convertToTwoDigitString(hours),
    convertToTwoDigitString(minutes),
    convertToTwoDigitString(restSeconds)
  ].join(":");
}

function convertToTwoDigitString(number) {
  if (number > 10) return String(number);
  return "0" + number;
}

module.exports = { humanReadable };
