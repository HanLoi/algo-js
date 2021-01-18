const readlineSync = require("readline-sync");
let number = readlineSync.question("Can you tell me a number with a quote ?");
console.log(Math.round(number));