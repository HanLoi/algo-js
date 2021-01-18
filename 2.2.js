const readlineSync = require("readline-sync");
let min = readlineSync.question("Give me a number that will be your minimum number");
let current = readlineSync.question("Give me a number that will be your current number");
let max = readlineSync.question("Give me a number that will be your maximum number");

if ((current < max ) && (current > min)) {
    console.log(current)
} else if (min > max) {
    console.log("BIIIIIIIIIPPPP !!! WRONNNG !!! you put a maximum who is lower than your minimum number !! Go return in primary school guy !!")
}