const answer = require("../perimeter");

describe("Perimeter", () => {
  it("perimeter(5) -> 80", () => {
    expect(answer.perimeter(5)).toBe(80);
  });

  it("perimeter(7) -> 216", () => {
    expect(answer.perimeter(7)).toBe(216);
  });

  it("perimeter(20) -> 114624", () => {
    expect(answer.perimeter(20)).toBe(114624);
  });

  it("perimeter(30) -> 14098308", () => {
    expect(answer.perimeter(30)).toBe(14098308);
  });
});
