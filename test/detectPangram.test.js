const answer = require("../detectPangram");

describe("Detect Pangram", () => {
  it("The quick brown fox jumps over the lazy dog", () => {
    expect(
      answer.isPangram("The quick brown fox jumps over the lazy dog")
    ).toBe(true);
  });
});
