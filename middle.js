const middle = function (array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    const middle1 = array.length / 2 - 1;
    const middle2 = array.length / 2;
    newArray.push(array[middle1], array[middle2]);
  } else {
    const middleIndex = (array.length - 1) / 2;
    newArray.push(array[middleIndex]);
  }
  return newArray;
};

module.exports = middle;
