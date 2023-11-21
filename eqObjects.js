const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  const keyCount1 = Object.keys(object1).length;
  const keyCount2 = Object.keys(object2).length;
  if (keyCount1 !== keyCount2) {
    return false;
  }
  const key1 = Object.keys(object1);
  for (const key of key1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
