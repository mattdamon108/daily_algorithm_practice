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
  });
});
