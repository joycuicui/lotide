const without = function (source, itemsToRemove) {
  let modifiedArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      modifiedArray.push(source[i]);
    }
  }
  return modifiedArray;
};

module.exports = without;
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
