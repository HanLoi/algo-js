const readlineSync = require("readline-sync");
let a = readlineSync.question("Tell me a name about the greatest soldier you known?");
let b = readlineSync.question("What's the most absurd object do you known ?")
let c = readlineSync.question("And what, for you, the worst job ever ?")
console.log("The story of " + a + ". A great story for a an adventurer but unfortunatly he got a " + b + " in the knee and now he become a " + c)