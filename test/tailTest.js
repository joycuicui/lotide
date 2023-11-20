const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");

const numbers = [1, 2, 3, 4, 5];
assertEqual(tail(numbers).length, 4);
assertEqual(tail(numbers)[0], 2);

const test1 = [1];
assertEqual(tail(test1).length, 0);
assertEqual(tail(test1)[0], undefined);

const test2 = [];
assertEqual(tail(test2).length, 0);
assertEqual(tail(test2)[0], undefined);
