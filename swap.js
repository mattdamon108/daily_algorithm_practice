// Programmers
// Greenlabs coding test

function solution(S, interval) {
  const splittedS = Array.from(S);

  // Using forEach
  //
  // interval.forEach((swapOrder) => {
  //   if (swapOrder[0] !== swapOrder[1]) {
  //     const prev = splittedS.slice(swapOrder[0] - 1, swapOrder[1]);
  //     const reversed = prev.reverse();
  //     splittedS.splice(swapOrder[0] - 1, swapOrder[1], ...reversed);
  //   }
  // });

  // Using reduce
  const result = interval.reduce((acc, cur) => {
    if (cur[0] !== cur[1]) {
      const reversed = acc.slice(cur[0] - 1, cur[1]).reverse();
      acc.splice(cur[0] - 1, cur[1], ...reversed);
    }

    return acc;
  }, splittedS);

  return result.join("");
}

module.exports = { solution };
