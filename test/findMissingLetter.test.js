const answer = require("../findMissingLetter");

describe("Find a missing letter", () => {
  it("[ a, b, c, d, f] -> e", () => {
    expect(answer.findMissingLetter(["a", "b", "c", "d", "f"])).toBe("e");
  });

  it("[ A, B, D, E] -> C", () => {
    expect(answer.findMissingLetter(["A", "B", "D", "E"])).toBe("C");
  });
});
