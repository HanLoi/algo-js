
function rand() {
    return Math.floor (Math.random() * (10 - 1 + 1) + 1)};
    
a = rand()
    
function factorial(a) { 
    
   
    if (a == 0)
        return 1;

    else { 
        return console.log(a * factorial (a - 1));
    }

}

console.log(factorial(a))
