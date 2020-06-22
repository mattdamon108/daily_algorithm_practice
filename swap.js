// Programmers
// Greenlabs coding test

function solution(S, interval) {
  const splittedS = Array.from(S);

  interval.forEach((swapOrder) => {
    if (swapOrder[0] !== swapOrder[1]) {
      const prev = splittedS.slice(swapOrder[0] - 1, swapOrder[1]);
      const reversed = prev.reverse();
      splittedS.splice(swapOrder[0] - 1, swapOrder[1], ...reversed);
    }
  });

  return splittedS.join("");
}

module.exports = { solution };
