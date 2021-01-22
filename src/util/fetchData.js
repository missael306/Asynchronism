// npm install xmlhttprequest --save
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          resolve
            ? resolve(JSON.parse(xhttp.responseText))
            : reject(new Error("Error", url));
        }
      }
    };
    xhttp.send();
  });
};



module.exports = fetchData;
