function askTvSerie() {
    let Serie = {}
    const readlineSync = require("readline-sync");
    a = readlineSync.question("Give name of your serie ")
    Serie.name= a
    b = readlineSync.question("Give year of your serie ")
    Serie.date= b
    c = readlineSync.question("Give 2 or 3 name of actor of your serie ")
    Serie.actor= c


    return console.log(Serie)
}


askTvSerie()


