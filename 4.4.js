

function rand() {
    return Math.floor (Math.random() * (10 - 1 + 1) + 1)};


function multiRand(n) {
    let arr = [];
    while (n !=0) {
    arr.push(rand())
    n --;
}; return arr};

function average(arr) {
    som = new Number(0);
    arrl = arr.length
    arr.forEach(element => {
        som = som+element;
    });
    return (som/arrl);
};

function min(arr) {
    return Math.min.apply(Math, arr);}; 

function max(arr) {
    return Math.max.apply(Math, arr);};

   
function final() {
    var n = new Number(0)
    const readlineSync = require("readline-sync");
    n = Math.floor (readlineSync.question("How many number do you want in your array ? "));
    arr = multiRand(n); 
    ave = average(arr);
    mini = min(arr);
    maxi = max(arr);
    return console.log ("Your array is " + arr + " , your average is " + ave + " , your minimum number is "+ mini +" and your max number "+ maxi)};

final()

/** function average(arr) give a average of array
 *  function min(arr) give a minimum of a array
 *  function max(arr) give a maximum of a array
 *  function final()  give a average, a minimum and a maximum of array
 */