const answer = require("../maxSequence");

describe("maxSequence", () => {
  it("TEST: [-2, 1, -3, 4, -1, 2, 1, -5, 4] => 6", () => {
    expect(answer.maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it("TEST: [-2, 1, -3, 4, -100, 2, 1, -5, 4] => 6", () => {
    expect(answer.maxSequence([-2, 1, -3, 4, -100, 2, 1, -5, 4])).toBe(4);
  });

  it("TEST: [] => 0", () => {
    expect(answer.maxSequence([])).toBe(0);
  });

  it("TEST: negative values only", () => {
    expect(answer.maxSequence([-1, -2, -3])).toBe(0);
  });

  it("TEST: positive values only", () => {
    expect(answer.maxSequence([1, 2, 3])).toBe(6);
  });
});

describe("getArrSum", () => {
  it("TEST: [1, 2, 3] => 6", () => {
    expect(answer.getArrSum([1, 2, 3])).toBe(6);
  });
  it("TEST: [3] => 3", () => {
    expect(answer.getArrSum([3])).toBe(3);
  });
});
