/**
  ECMAScript
  Es una especificación de leguaje de programación publicada por ECMA International,
  que a partir del 2015 a la actualidad se encarga de regir cómo debe ser interpretado y
  funcionar el lenguaje Javascript.

  A partir de la edición 6 (ES6) se agregaron cambios significativos con el propósito de
  escribir aplicaciones complejas y con mejoras importantes en la sintaxis y entro ello
  tenemos las promesas.


  Promises:
  Recordar: Una promesa sólo puede completarse con éxito o fallar una vez.
  El estado de una promesa es: Pendiente, Resulta y Rechazada

  Importante: Las promesas tienen la particularidad de que se pueden encadenar then,
  siendo el resultado de una promesa, los datos de entrada de otra posible función, además,
  tienen un mecanismo para el manejo de errores catch
 */

// Ejemplo 1
// function getGrade(score) {
//   const promise = new Promise((resolve, reject) => {
//     if (score > 6) {
//       resolve('passed!')
//     } else {
//       reject('did note make it :(')
//     }
//   })
//   return promise
// }

// getGrade(10)
//   .then(sucessMessage => console.log(sucessMessage))
//   .catch(errorMessage => console.log(errorMessage))

// getGrade(5)
//   .then(sucessMessage => console.log(sucessMessage))
//   .catch(errorMessage => console.log(errorMessage))


/**
  Ejemplo 2: Convertir callback a promise

  setTimeout(() => {
    console.log('Get info from users')
    setTimeout(() => {
      console.log('Get payments from users')
      setTimeout(() => {
        console.log('Get details from payments')
        setTimeout(() => {
          console.log('More info...')
        }, 0)
      }, 4000)
    }, 2000)
  }, 0)
 */

// function makeAPICall(milliseconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, milliseconds)
//   })
// }

// makeAPICall(0)
//   .then(() => {
//     console.log('Get info from users')
//     return makeAPICall(0)
//   })
//   .then(() => {
//     console.log('Get payments from users')
//     return makeAPICall(0)
//   })
//   .then(() => {
//     console.log('Get details from payments')
//     return makeAPICall(0)
//   })
//   .then(() => {
//     console.log('More info..')
//   })


/**
 Ejemplo 3: readFile con Promises
 */

const fs = require('fs')
const path = require('path')

// Convertir la funcion de readFile a una promise
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) return reject(error)
      return resolve(data)
    })
  })
}

readFilePromise(path.join(__dirname, 'archivo_01.txt'))
  .then(data => console.log(data))
  .catch(error => console.error(error))

readFilePromise(path.join(__dirname, 'archivo_02.txt'))
  .then(data => console.log(data))
  .catch(error => console.error(error))

readFilePromise(path.join(__dirname, 'archivo_03.txt'))
  .then(data => console.log(data))
  .catch(error => console.error(error))

// Se ejecuta de manera secuencial
Promise.all([
  readFilePromise(path.join(__dirname, 'archivo_01.txt')),
  readFilePromise(path.join(__dirname, 'archivo_02.txt')),
  readFilePromise(path.join(__dirname, 'archivo_03.txt')),
]).then(values => {
  console.log(values[2])
})

