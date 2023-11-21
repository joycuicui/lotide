const assert = require("chai").assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

describe("#countOnly", () => {
  it("should return the correct counts for selected names", () => {
    const inputObj = {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    };
    const expectedOutput = {
      Jason: 1,
      Fang: 2,
    };
    assert.deepEqual(countOnly(firstNames, inputObj), expectedOutput);
  });
});
