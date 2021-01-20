const readlineSync = require("readline-sync");
let name = readlineSync.question("What is your name ?");
let firstname = readlineSync.question("What is your first name ?");
let city = readlineSync.question("What is your city ?");
console.log("Your name is " + name + " " + firstname+ " and you live in " + city)