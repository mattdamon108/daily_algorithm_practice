const answer = require("../uniqueInOrder");

test("uniqueInOrder(iterable)", () => {
  expect(answer.uniqueInOrder("AAAABBBCCDAABBB")).toStrictEqual([
    "A",
    "B",
    "C",
    "D",
    "A",
    "B"
  ]);
  expect(answer.uniqueInOrder([1, 2, 2, 3, 3])).toStrictEqual([1, 2, 3]);
});
