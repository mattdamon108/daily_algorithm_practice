const answer = require("../mergeArray");

describe("mergeArray", () => {
  //   it("test case #1", () => {
  //     expect(
  //       answer.mergeArray(
  //         [{ id: 1, value: "kneeprayer" }],
  //         [{ id: 1, timestamp: "20191009T01:00Z" }]
  //       )
  //     ).toEqual([{ id: 1, value: "kneeprayer", timestamp: "20191009T01:00Z" }]);
  //   });

  it("test case #2", () => {
    expect(
      answer.mergeArray(
        [
          { id: "1", value: "3" },
          { id: "2", value: "5" },
          { id: "3", value: "6", name: "moondaddi" }
        ],
        [
          { id: "1", timestamp: "2019/10/08 11:32:11" },
          { id: "2", timestamp: "2019/10/07 10:11:12" },
          { id: "3", name: "kneeprayer" }
        ]
      )
    ).toEqual([
      { id: "1", value: "3", timestamp: "2019/10/08 11:32:11" },
      { id: "2", value: "5", timestamp: "2019/10/07 10:11:12" },
      { id: "3", value: "6", name: "kneeprayer" }
    ]);
  });
});
