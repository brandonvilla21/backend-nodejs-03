/**
  Crea una funcion que implemente un Callback para obtener la informacion de la API

 */

const https = require('https')


function getData(callback) {
  const call = https.get('https://api.spacexdata.com/v3/rockets', response => {
    let data = ''

    response.on('data', (chunk) => {
      data += chunk
    })

    response.on('end', () => {
      const body = JSON.parse(data)
      callback(null, body)
    })

    response.on('error', (error) => {
      callback({ message: "An error ocurred." }, null)
    })
  })

  call.on('error', () => {
    callback({ message: "An error ocurred." }, null)
  })
}

getData((error, data) => {
  if (error) {
    throw error
  }

  console.log(data)
})