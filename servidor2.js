const express = require('express')
const app = express()

/* 
EJEMPLO DE LA WEB
https://www.pensemosweb.com/como-crear-servidor-web-5-minutos-nodejs/
*/
app.use(express.static(__dirname + '/public/'))

app.listen('3000', ()=>{
    console.log('Servidor escuchando puerto 3000')
})
