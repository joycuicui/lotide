const tail = function (arr) {
  if (arr.length <= 1) {
    return undefined;
  }
  const newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;
