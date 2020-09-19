/**
  Async-Await
  Los operadores de async/await se incluyeron a partir de ECMAScript 7
  para simplificar la forma de trabajar con las promesas, la finalidad es
  tener implementaciones aún más legibles de código, de esta forma será posible
  esperar por una respuesta y descartando el uso de then y catch

  Conceptos básicos

  async => es el operador para declarar una función
  await => debe ser usada dentro de la función async
  La función async retorna una promesa.
*/

async function getRockets() {
  // esperar por una promise  
}

const getRockets2 = async () => {
  // esperar por una promise
}

// Ejemplo 1: Convertir funcion de readFile a una promise
const fs = require('fs')
const path = require('path')

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) return reject(error)
      return resolve(data)
    })
  })
}


async function readFiles() {
  try {
    const data1 = await readFile(path.join(__dirname, 'archivo_01.txt'))
    const data2 = await readFile(path.join(__dirname, 'archivo_02.txt'))
    const data3 = await readFile(path.join(__dirname, 'archivo_03.txt'))
    console.log(data1)
    console.log(data2)
    console.log(data3)
  } catch(error) {
    console.error(error)
  }
}
// readFiles()

async function readFilesImproved() {
  try {
    const values = await Promise.all([
      readFile(path.join(__dirname, 'archivo_01.txt')),
      readFile(path.join(__dirname, 'archivo_02.txt')),
      readFile(path.join(__dirname, 'archivo_03.txt')),
    ])
    console.log(values)
  } catch (error) {
    console.error(error)
  }
}

readFilesImproved()