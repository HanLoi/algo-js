const readlineSync = require("readline-sync");
let firstnumber = readlineSync.question("Can you tell me a integer number ?");
let secondnumber = readlineSync.question("Can you tell me a second integer number ?");
let a = firstnumber/secondnumber;
console.log(a);