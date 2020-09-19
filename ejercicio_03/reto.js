/**
  Completa el siguiente ejercicio:
  Obten la info de todos los pokemones que se encuentran en el arreglo

  Para no saturar la consola con tanta informacion de los logs, solo
  indicar que el pokemon ya fue "atrapado"

  https://pokeapi.co/api/v2/pokemon/<pokemon>
 */
const https = require('https');

// Crear una funcion que permita obtener la informacion de un pokemon
function obtenerPokemon(name) {
  return new Promise((resolve, reject) => {
    const call = https.get(`https://pokeapi.co/api/v2/pokemon/${name}`, (response) => {
        let data = '';
        response.on('data', (stream) => {
          data += stream;
        });

        response.on('end', () => {
          const body = JSON.parse(JSON.stringify(data));
          resolve(body);
        });

        response.on('error', (error) => {
          reject({ message: 'An error ocurred.' });
        });
      }
    );

    call.on('error', () => {
      reject({ message: 'An error ocurred.' });
    });
  });
}

const pokemones = [
  "bulbasaur",
  "charmander",
  "squirtle",
  "pidgey",
  "pikachu",
  "rattata",
  "alakazam",
  "onix",
  "mew"
];

function atraparPokemones(pokemones) {
  pokemones.forEach(async pokemon => {
    try {
      await obtenerPokemon(pokemon)
      console.log(`${pokemon} atrapado!`)
    } catch(error) {
      console.error(error);
    }
  })
}

atraparPokemones(pokemones)