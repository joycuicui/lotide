const countLetters = function (string) {
  let result = {};
  const noSpaceString = string.replaceAll(" ", "");

  for (letter of noSpaceString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
// const result1 = countLetters("hello world");
// assertEqual(result1["h"], 1);
// assertEqual(result1["e"], 1);
// assertEqual(result1["l"], 3);
// assertEqual(result1["o"], 2);
