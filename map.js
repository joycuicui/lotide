const map = (array, callback) => {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, (word) => word[0]);
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// const numbers = [1, 2, 3, 4, 5];
// const results2 = map(numbers, (number) => number + 10);
// assertArraysEqual(results2, [11, 12, 13, 14, 15]);
