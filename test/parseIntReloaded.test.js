const answer = require("../parseIntReloaded");

describe("parseIntReloaded", () => {
  it('parseInt("one")', () => {
    expect(answer.parseInt("one")).toBe(1);
  });

  it('parseInt("twenty")', () => {
    expect(answer.parseInt("twenty")).toBe(20);
  });

  it('parseInt("two hundred forty-six")', () => {
    expect(answer.parseInt("two hundred forty-six")).toBe(246);
  });

  it('parseInt("two thousand")', () => {
    expect(answer.parseInt("two thousand")).toBe(2000);
  });

  it('parseInt("twenty-six thousand three hundred fifty-nine', () => {
    expect(
      answer.parseInt("twenty-six thousand three hundred fifty-nine")
    ).toBe(26359);
  });

  it('parseInt("two hundred thousand")', () => {
    expect(answer.parseInt("two hundred thousand")).toBe(200000);
  });

  it('parseInt("six hundred sixty-six thousand six hundred sixty six")', () => {
    expect(
      answer.parseInt("six hundred sixty-six thousand six hundred sixty six")
    ).toBe(666666);
  });
});
