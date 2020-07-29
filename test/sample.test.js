const answer = require("../sample");

describe("Zicbang", () => {
  it("run", () => {
    expect(
      answer(["apple", ["banana", "strawberry", ["apple"]]], "apple")
    ).toStrictEqual(2);
  });
});
