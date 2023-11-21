const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return ['hello', 'this', 'is', 'Link'] for ['hello', 'this', ['is', 'Link']", () => {
    assert.deepEqual(flatten(["hello", "this", ["is", "Link"]]), [
      "hello",
      "this",
      "is",
      "Link",
    ]);
  });
  it("should return [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });
});
