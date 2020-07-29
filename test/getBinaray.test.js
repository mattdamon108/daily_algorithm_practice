const answer = require("../getBinary");

describe("test", () => {
  test("3", () => {
    expect(answer(3)).toBe(11);
  });

  test("4", () => {
    expect(answer(4)).toBe(100);
  });

  test("99999", () => {
    expect(answer(99999)).toBe(0);
  });
});
