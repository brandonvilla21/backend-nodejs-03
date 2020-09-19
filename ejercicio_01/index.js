/**
  Callbacks:
  Es una simple funcion que pasa como argumento a otra funcion y que se ejecuta
  cuando algun evento sucede. En JavaScript, las funciones son objetos, por ello las funciones
  admiten funciones como argumentos y pueden ser devualetas por otras funciones

  Importante: Cualquier funcion que se pase como argumento se denomina funcion Callback,
  no hay requisito para usar una funcion como callback

  Ejemplo de una callback:
  function test (callback) {
    // ...
    callback(error, data)
  }
  
  test((error, data) => {
    // ...
  })

 */

/**
  Ejemplo 1

 */

// function primero() {
//   console.log('Soy el 1')
// }

// function segundo() {
//   console.log('Soy el 2')
// }

// function tercero() {
//   console.log('Soy el 3')
// }

// primero()
// segundo()
// tercero()

/**
 Ejemplo 2:
*/
// function primero() {
//   // Simula una peticion HTTPS
//   setTimeout(() => {
//     console.log('Soy el 1')
//   }, 0)
// }

// function segundo() {
//   console.log('Soy el 2')
// }

// function tercero() {
//   console.log('Soy el 3')
// }


// primero()
// segundo()
// tercero()


// Ejemplo 3
// https.get()
// Callback hell
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
