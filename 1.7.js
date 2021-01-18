const readlineSync = require("readline-sync");
let shoesize = readlineSync.question("What your shoe size ?");
let BD = readlineSync.question("when is it your birth's year ?");
let a = shoesize * 2;
let b = a + 5;
let c = b * 50;
let d = c - BD;
let e = d + 1766;
console.log(e);