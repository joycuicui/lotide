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

const middle = function (array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    const middle1 = array.length / 2 - 1;
    const middle2 = array.length / 2;
    newArray.push(array[middle1], array[middle2]);
  } else if (array.length % 2 !== 0) {
    const middleIndex = (array.length - 1) / 2;
    newArray.push(array[middleIndex]);
  }
  return newArray;
};

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([5]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2]);
