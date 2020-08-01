const answer = require("../bstDistance");

describe("", () => {
  test("case 1", () => {
    expect(answer(6, [5, 6, 3, 1, 2, 4], 2, 4)).toBe(3);
  });

  // test("case 2", () => {
  //   expect(answer(5, [9, 7, 5, 3, 1], 7, 20)).toBe(-1);
  // });
});
