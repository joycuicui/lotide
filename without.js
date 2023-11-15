const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion passed: [${arr1} === ${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: [${arr1}] !== [${arr2}]`);
  }
};

const without = function (source, itemsToRemove) {
  let modifiedArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      modifiedArray.push(source[i]);
    }
  }
  return modifiedArray;
};

console.log(without(["1", "2", "3"], [1, 2, "3"]));
