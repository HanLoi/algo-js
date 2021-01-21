const readlineSync = require("readline-sync");
var number = new Number(0)
number = Math.floor (readlineSync.question("Tell me a number between 1 at 7 "));

if (number == 1) {
    console.log("It's monday")
}else if (number == 2){
    console.log("It's tuesday")
} else if (number == 3){
    console.log("It's wednesday")
}else if (number == 4){
    console.log("It's thursday")
}else if (number == 5){
    console.log("It's friday")
}else if (number == 6){
    console.log("It's saturday")
}else if (number == 7){
    console.log("It's sunday")
}

