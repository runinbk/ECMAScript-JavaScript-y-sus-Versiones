// Lo normal de un try catch es manejar el error
try {
    hello();
} catch (error) {
    console.log(error);
}

// Con ES10 no es nesesario manejar el error, podemos mostrar asignar una logica o mostrar lo que querramos
try {
    anotherFn();
} catch {
    console.log('Esto es un error')
}