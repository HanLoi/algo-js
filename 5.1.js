function askTvSeries() {
    let Serie = {
    "name" : "True Detective",
    "Saison" : [{
        "year of Saison 1" : "2014 01 12",
        "Year of Saison 2" : "2015 06 21",
        "Year of Saison 3" : "2019 01 13",
    }
    ],
    "Cast" : 
        {
        "Saison 1" : { 
            "actor 1 of saison 1" : "Matthew McConaughey",
            "actor 2 of saison 1" : "Woody Harrelson"},
        "Saison 2" : {
            "actor 1 of saison 2" : "Colin Farrel",
            "actor 2 of saison 2" : "Rachel MacAdams"},
        "Saison 3":  {
            "actor 1 of saison 3" : "Mahershala Ali",
            "actor 2 of saison 3" : "Carmen Ejogo"},
            
        },
        
    }
    return console.log(Serie)
}

askTvSeries()