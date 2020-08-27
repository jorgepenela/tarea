const faker = require('faker')
const uuid = require('uuid')


class Producto {
    constructor(id, nombre, precio, descripcion){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this .descripcion = descripcion
    }
}

// crear productos
const nuevo = (n) => {
    for (let i= 0; i < n; i++) {        

        // armo un objetos
        const p = new Producto(
            uuid.v4(),
            faker.commerce.productName(),
            faker.commerce.price(),
            faker.commerce.productDescription() 
            )

        // lo transformo a string
        let pjs = JSON.stringify(p)
        
        return pjs
    }
}

// ejecuto!
//nuevo(10)

module.exports = {
    nuevo
}
