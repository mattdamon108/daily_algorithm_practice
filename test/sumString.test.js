const answer = require("../sumString");

describe("sumString", () => {
  it('"123" + "456" -> "579"', () => {
    expect(answer.sumString("123", "456")).toBe("579");
  });

  it('"234" + "456" -> "690"', () => {
    expect(answer.sumString("234", "456")).toBe("690");
  });

  it('"800" + "9567" -> "10367"', () => {
    expect(answer.sumString("800", "9567")).toBe("10367");
  });

  it('"00103" + "08567" -> "8670"', () => {
    expect(answer.sumString("00103", "08567")).toBe("8670");
  });

  it('"99" + "1" -> "100"', () => {
    expect(answer.sumString("99", "1")).toBe("100");
  });
});
