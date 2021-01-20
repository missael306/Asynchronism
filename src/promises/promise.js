const fetchData = require("../util/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
.then(data =>{    
    let indexCharacter = 0;
    let urlCharacter = API + data.results[indexCharacter].id;    
    console.log(`Personaje: ${data.results[indexCharacter].name}`)
    return fetchData(urlCharacter);
})
.then(data => {        
    let urlOrigin = data.origin.url;
    return fetchData(urlOrigin);
})
.then(data => {
    console.log(`Origen: ${data.name}`);    
})
.catch(err => {
    console.error(err);
})