function calcSurface (a, b) {
    return (a * b)
}

const readlineSync = require("readline-sync");
var c = Math.floor (readlineSync.question("What's the width of your rectangle ? "))
var d = Math.floor (readlineSync.question("What's the height of your rectangle ? "))

console.log("The surface of your rectangle is " + calcSurface (c, d) + " m²")