const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate through the keys of the first object
  for (const key of keys1) {
    // Get the values corresponding to the current key in both objects
    const value1 = object1[key];
    const value2 = object2[key];

    // Check if the values are arrays and recursively compare them
    if (Array.isArray(value1) && Array.isArray(value2)) {
      // eqObjects can compare both arrays and objects
      if (!eqObjects(value1, value2)) {
        return false;
      }
    } else if (typeof value1 === "object" && typeof value2 === "object") {
      // Check if the values are objects and recursively compare them
      if (!eqObjects(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      // If the values are neither arrays nor objects, compare them directly
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;
