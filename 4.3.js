function rand() {
    return Math.floor (Math.random() * (10 - 1 + 1) + 1)
}
const readlineSync = require("readline-sync");
var n = new Number(0)
n = Math.floor (readlineSync.question("How many number in your array ? "));
function multiRand(n) {
    let array = [];
    while (n !=0) {
    array.push(rand())
    n --;
}
return array
}

console.log(multiRand(n));