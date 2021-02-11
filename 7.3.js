const readlineSync = require("readline-sync");



let n = 1
let b = parseInt(readlineSync.question("Give me a number "));
let c;
let arr= [];

for (n = 1; n<b; n++) {
    
    c = b%n;

    if ( c == 0 && n != b && n != 1 ){
    arr.push(n);
    }
}

console.log(arr)

