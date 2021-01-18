const readlineSync = require("readline-sync");
let number = readlineSync.question("Can you tell me a number with a quote ?");
let a = number * 2;
console.log(Math.round(a));