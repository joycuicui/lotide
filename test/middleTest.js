const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("should return [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return [] for [5]", () => {
    assert.deepEqual(middle([5]), []);
  });
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return ['hello'] for [5, 2, 'hello', 4, 'world']", () => {
    assert.deepEqual(middle([5, 2, "hello", 4, "world"]), ["hello"]);
  });
});
