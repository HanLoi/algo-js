const readlineSync = require("readline-sync");
var chiffre = new Number(0)
chiffre = readlineSync.question("What's your favorite number ?");


while (chiffre != 42){
    console.log("Are you sure ?");
    chiffre = readlineSync.question("What's your favorite number ?");
}
console.log("Great , me too !");


