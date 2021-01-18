const readlineSync = require("readline-sync");
let firstname = readlineSync.question("What is your first name ?");
console.log("Hello " + firstname);