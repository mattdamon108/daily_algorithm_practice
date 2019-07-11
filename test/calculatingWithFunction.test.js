const answer = require("../calculatingWithFunction");

describe("Calculating with functions", () => {
  it("seven() -> 7", () => {
    expect(answer.seven()).toBe(7);
  });

  it("seven(plus(five())) -> 12", () => {
    expect(answer.seven(answer.plus(answer.five()))).toBe(12);
  });

  it("seven(minus(five())) -> 2", () => {
    expect(answer.seven(answer.minus(answer.five()))).toBe(2);
  });

  it("seven(times(five())) -> 35", () => {
    expect(answer.seven(answer.times(answer.five()))).toBe(35);
  });

  it("seven(dividedBy(five())) -> 1", () => {
    expect(answer.seven(answer.dividedBy(answer.five()))).toBe(1);
  });
});
