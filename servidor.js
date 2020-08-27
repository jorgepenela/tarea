const express = require('express')
const http = require('http')
const app = express()

// No entiendo muy bien que hace esta funcion.
app.get('/hola', (request, response) => {
    // Codigo de estado 200 = OK.
    response.writeHead(200, {
        'Content-type': 'text/plain'
    })
    response.end('<h1>Lisa necesita frenos</h1>')
    // esto funcionó. pero no entiendo muy bien para que sirve.
})

app.listen(3000, (err)=>{
    console.log(err)
    console.log('Aplicacion corriendo en el puerto 3000')
})
