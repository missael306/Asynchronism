const fetchData = require("../util/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

let getData = async (url) => {
  try {
    let data = await fetchData(url);
    let indexCharacter = 0;
    let urlCharacter = API + data.results[indexCharacter].id;
    let dataCharacter = await fetchData(urlCharacter);
    let urlOrigin = dataCharacter.origin.url;
    let dataOrigin = await fetchData(urlOrigin);
    console.log(`Personaje: ${data.results[indexCharacter].name}`);
    console.log(`Origen: ${dataOrigin.name}`);
  } catch (error) {
    console.error(error);
  }
};

getData(API);
