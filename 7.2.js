const readlineSync = require("readline-sync");
let a = 0
let b = parseInt(readlineSync.question("Give me a number "));


let arr = [a , b]
let som;
let c = 0
let d = 1
let e = 0

while(  e != 10) {
   som = parseInt(arr[c]) + parseInt(arr[d])
   arr.push(som)
   c++;
   d++;
   e++;
}

console.log(arr)



