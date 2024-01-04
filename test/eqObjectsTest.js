const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("should return true for shirtObject and anotherShirtObject", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });
  it("should return false for shirtObject and longSleeveShirtObject", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = {
      size: "medium",
      color: "red",
      sleeveLength: "long",
    };
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });
  it("should return true for multiColorShirtObject and anotherMultiColorShirtObject", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = {
      size: "medium",
      colors: ["red", "blue"],
    };
    assert.isTrue(
      eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)
    );
  });
  it("should return false for multiColorShirtObject and longSleeveMultiColorShirtObject", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = {
      size: "medium",
      colors: ["red", "blue"],
      sleeveLength: "long",
    };
    assert.isFalse(
      eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)
    );
  });
  it("should return true for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it("should return false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.isFalse(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })
    );
  });
  it("should return false for { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
});
