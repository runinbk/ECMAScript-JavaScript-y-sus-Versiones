
const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

// console.log(users.gndx.country);
// console.log(users.gndx.age);        // Que pasa si queremos acceder a una propiedad que no existe? nuestra app se rompe... 
console.log(users.gndx);
// console.log(users.bebeloper.country);    // Esto quebra la app
console.log(users?.bebeloper?.country); // Lo solucionamos añadiendo este simbolo de pregunta en las propuedades
// de esta forma lo validamos con el optional chaining
