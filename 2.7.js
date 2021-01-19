const readlineSync = require("readline-sync");
var n = Math.floor (readlineSync.question("Tell me your first number that you want "));

var a = Math.floor (readlineSync.question("Tell me your second number that you want "));

var b = Math.floor (readlineSync.question("Tell me your third number that you want "));

var c = Math.floor (readlineSync.question("Tell me your fourth number that you want "));

var d = Math.floor (readlineSync.question("Tell me your fifth number that you want "));


console.log(n + a + b + c + d)