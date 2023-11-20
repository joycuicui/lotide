const flatten = function (arr) {
  let output = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      output = output.concat(item);
    } else {
      output.push(item);
    }
  }
  return output;
};

module.exports = flatten;
