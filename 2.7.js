const readlineSync = require("readline-sync");
var n = Math.floor (readlineSync.question("How many time do you want to be questioned ? "));
var n2 = new Number(0);
while ( n !=0) {
    n2 = n2 +  Math.floor (readlineSync.question("Give me a number "))
    n --;}
console.log(n2);