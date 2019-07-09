const answer = require("../currying");

describe("A Currying", () => {
  it("TEST: add(2) is equal to 2", () => {
    expect(answer.add(2)).toBe(2);
  });

  it("TEST: add(2)(3) is equal to 5", () => {
    expect(answer.add(2)(3)).toBe(5);
  });

  it("TEST: add(2)(3)(4) is equal to 9", () => {
    expect(answer.add(2)(3)(4)).toBe(9);
  });
});
