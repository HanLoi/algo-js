const readlineSync = require("readline-sync");
let a = readlineSync.question("Tell me a name about the greatest soldier you known?");
console.log("There are still 2 question")
let b = readlineSync.question("What's the most absurd object do you known ?")
console.log("There are still 1 question")
let c = readlineSync.question("And what, for you, the worst job ever ?")
console.log("The story of " + a + ". A great story for a an adventurer but unfortunatly he got a " + b + " in the knee and now he become a " + c)