function calcDistance() {

    
    const readlineSync = require("readline-sync");
    var x1 = new Number (readlineSync.question("What is your x1 ? "));
    var y1 = new Number (readlineSync.question("What is your y1 ? "));
    var x2 = new Number (readlineSync.question("What is your x2 ? "));
    var y2 = new Number (readlineSync.question("What is your y2 ? "));

    return console.log(Math.sqrt((Math.pow((x2-x1),2) + Math.pow(y2-y1),2)))
}

calcDistance()