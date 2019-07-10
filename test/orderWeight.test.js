const answer = require("../orderWeight");

describe("Order Weight", () => {
  it('"103 123 4444 99 2000" -> "2000 103 123 4444 99"', () => {
    expect(answer.orderWeight("103 123 4444 99 2000")).toBe(
      "2000 103 123 4444 99"
    );
  });

  it('"2000 10003 1234000 44444444 9999 11 11 22 123" -> "11 11 2000 10003 22 123 1234000 44444444 9999"', () => {
    expect(
      answer.orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")
    ).toBe("11 11 2000 10003 22 123 1234000 44444444 9999");
  });
});

test("calcSum", () => {
  expect(answer.calcSum("1234")).toBe(10);
});
