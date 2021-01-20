// npm install xmlhttprequest --save
let XMLHttpRequest = require( "xmlhttprequest" ).XMLHttpRequest;

function fetchData( url, callback ){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET",url,true);
    xhttp.onreadystatechange = function(event){
        if( xhttp.readyState === 4 ){
            if( xhttp.status === 200 ){
                callback(null,JSON.parse( xhttp.responseText ));
            }else{
                const error = new Error("Error " + url );
                return callback(error,null);
            }
        }
    }
    xhttp.send();
}

function printTitle(title){
    console.log("*************************");
    console.log(title);    
    console.log("*************************");
}

const API = "https://rickandmortyapi.com/api/character/";

fetchData(API,function(errorCharacters,dataCharacters){
    if(errorCharacters) return console.log(errorCharacters);
    let indexCharacter = 0;
    let urlCharacter = API + dataCharacters.results[indexCharacter].id
    fetchData(urlCharacter,function(errorCharacter,dataCharacter){
        if(errorCharacters) return console.log(errorCharacters);
        let urlLocation = dataCharacter.origin.url;
        fetchData(urlLocation,function(errorLocation,dataLocation){
            if( errorLocation ) return console.log(errorLocation);
            printTitle(`Personaje: ${dataCharacters.results[indexCharacter].name}`);
            printTitle(`Origen: ${dataLocation.name}`);
        })
    })
})