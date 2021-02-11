const readlineSync = require("readline-sync");
let a = Math.floor(Math.random()*100)
let b;

b = readlineSync.question("Guess the number between 1 to 100  ")

while (b != a){

if ( b > a ) {
    console.log("Too hight !")
    b = readlineSync.question("Retry to discover the number ! Give me your next number  ")
}else if (b < a){
    console.log("Too low !")
    b = readlineSync.question("Retry to discover the number ! Give me your next number  ")
}}

if (b == a) {
    console.log("Well guessed !");
}










