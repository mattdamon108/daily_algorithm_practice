const answer = require("../nextBigger");

describe("nextBigger", () => {
  it("nextBigger(12) -> 21", () => {
    expect(answer.nextBigger(12)).toBe(21);
  });
  it("nextBigger(513) -> 531", () => {
    expect(answer.nextBigger(513)).toBe(531);
  });
  it("nextBigger(2017) -> 2071", () => {
    expect(answer.nextBigger(2017)).toBe(2071);
  });
  it("nextBigger(414) -> 441", () => {
    expect(answer.nextBigger(414)).toBe(441);
  });
  it("nextBigger(144) -> 414", () => {
    expect(answer.nextBigger(144)).toBe(414);
  });
  it("nextBigger(553014265324320) -> 553014265330224", () => {
    expect(answer.nextBigger(553014265324320)).toBe(553014265330224);
  });
});
