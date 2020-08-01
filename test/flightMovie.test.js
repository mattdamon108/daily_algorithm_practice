const answer = require("../flightMovie");

describe("", () => {
  test("case 1", () => {
    expect(answer(110, 6, [20, 70, 90, 30, 60, 110])).toStrictEqual([0, 4]);
  });

  test("case 2", () => {
    expect(answer(250, 5, [100, 180, 40, 120, 10])).toStrictEqual([1, 2]);
  });
});
