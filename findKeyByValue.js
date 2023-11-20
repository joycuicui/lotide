const findKeyByValue = function (object, value) {
  const keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const dog = { name: "puppy", age: 5, breed: "poodle" };
// assertEqual(findKeyByValue(dog, 5), "age");
// assertEqual(findKeyByValue(dog, "poodle"), "breed");
