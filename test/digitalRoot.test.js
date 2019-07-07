const digitalRoot = require("../digitalRoot");

test("convertNumToArr(192)", () => {
  expect(digitalRoot.convertNumToArr(192)).toStrictEqual([1, 9, 2]);
});

test("recursiveSumArr([5, 6, 7]", () => {
  expect(digitalRoot.recursiveSumArr([5, 6, 7])).toStrictEqual([9]);
});

test("digitalRoot(192)", () => {
  expect(digitalRoot.digitalRoot(192)).toBe(3);
});
