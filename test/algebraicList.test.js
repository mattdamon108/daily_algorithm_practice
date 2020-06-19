const Cons = require("../algebraicList");

const numbers = new Cons(
  1,
  new Cons(2, new Cons(3, new Cons(4, new Cons(5, null))))
);

describe("Algebraic Lists", () => {
  it("toArray", () => {
    expect(numbers.toArray()).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it("fromArray", () => {
    expect(Cons.fromArray([1, 2, 3, 4, 5])).toStrictEqual(numbers);
    expect(Cons.fromArray([1, 2])).toStrictEqual(
      new Cons(1, new Cons(2, null))
    );
    expect(Cons.fromArray([1])).toStrictEqual(new Cons(1, null));
    expect(Cons.fromArray([])).toStrictEqual(new Cons(null, null));
  });

  it("filter", () => {
    expect(
      Cons.fromArray([1, 2, 3, 4, 5]).filter(function (n) {
        return n % 2 === 0;
      })
    ).toStrictEqual(new Cons(2, new Cons(4, null)));
    expect(
      Cons.fromArray([1, 2, 3, 4, 5])
        .filter(function (n) {
          return n % 2 !== 0;
        })
        .toArray()
    ).toStrictEqual([1, 3, 5]);
  });

  it("map", () => {
    expect(
      Cons.fromArray([1, 2, 3, 4, 5]).map(function (n) {
        return n * n;
      })
    ).toStrictEqual(
      new Cons(1, new Cons(4, new Cons(9, new Cons(16, new Cons(25, null)))))
    );
    expect(
      new Cons(2, null)
        .map(function (n) {
          return n * n;
        })
        .toArray()
    ).toStrictEqual([4]);
  });

  it("string", () => {
    expect(
      Cons.fromArray(["1", "2", "3", "4", "5"])
        .map(function (s) {
          return parseInt(s);
        })
        .filter(function (n) {
          return n > 3;
        })
        .toArray()
    ).toStrictEqual([4, 5]);
  });
});
