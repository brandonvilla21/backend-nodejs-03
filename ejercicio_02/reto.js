/**
  Crea una funcion que implemente una Promise para obtener la informacion de la API
 */

const https = require('https');

function getData() {
  return new Promise((resolve, reject) => {
    const call = https.get(
      'https://api.spacexdata.com/v3/rockets',
      (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          const body = JSON.parse(data);
          // callback(null, body)
          resolve(body);
        });

        response.on('error', (error) => {
          // callback({ message: "An error ocurred." }, null);
          reject({ message: 'An error ocurred.' });
        });
      }
    );

    call.on('error', () => {
      // callback({ message: "An error ocurred." }, null)
      reject({ message: 'An error ocurred.' });
    });
  });
}

// getData((error, data) => {
//   if (error) {
//     throw error
//   }

//   console.log(data)
// })

getData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
