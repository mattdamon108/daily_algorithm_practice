const answer = require("../humanReadable");

describe("Human readable time", () => {
  it("humanReadable(0) -> 00:00:00", () => {
    expect(answer.humanReadable(0)).toBe("00:00:00");
  });

  it("humanReadable(5) -> 00:00:05", () => {
    expect(answer.humanReadable(5)).toBe("00:00:05");
  });

  it("humanReadable(60) -> 00:01:00", () => {
    expect(answer.humanReadable(60)).toBe("00:01:00");
  });

  it("humanReadable(86399) -> 23:59:59", () => {
    expect(answer.humanReadable(86399)).toBe("23:59:59");
  });
});
