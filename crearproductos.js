const faker = require('faker')
const uuid = require('uuid')
const fs = require('fs')

class Producto {
    constructor(id, nombre, precio, descripcion){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this .descripcion = descripcion
    }
}

// crear producto
const nuevo = (n) => {
    for (let i= 0; i < n; i++) {        

        // armo un objeto
        const p = new Producto(
            uuid.v4(),
            faker.commerce.productName(),
            faker.commerce.price(),
            faker.commerce.productDescription() 
            )

        // lo transformo a JSON
        const pjs = JSON.stringify(p)

        // lo exporto (tengo que importar fs para crar archivos)        
        const nombreArchivo = `/js/dos/productos/${p.id}.json`
        fs.writeFile(nombreArchivo, pjs, 'UTF-8', (err)=>{
            if(err){
                console.log(err)
                return
            }
        })
    }
}

// ejecuto!
//nuevo(10)

module.exports = {
    nuevo
}
