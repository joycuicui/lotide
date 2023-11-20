const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("should return [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("should return undefined for [1]", () => {
    assert.deepEqual(tail([1]), undefined);
  });
  it("should return undefined for []", () => {
    assert.deepEqual(tail([]), undefined);
  });
});
