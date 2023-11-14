const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamps");
assertEqual(1, 1);
assertEqual("Hello", "Hello");
assertEqual("world", "wolrd");
assertEqual(78, 78);
assertEqual(89, 99);
