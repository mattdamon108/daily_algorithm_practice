const answer = require("../swap");

describe("swap", () => {
  it("abcde", () => {
    expect(
      answer.solution("abcde", [
        [4, 5],
        [1, 2],
        [3, 3],
      ])
    ).toStrictEqual("baced");

    expect(
      answer.solution("abcde", [
        [1, 3],
        [1, 4],
        [4, 5],
      ])
    ).toStrictEqual("dabec");
  });
});
