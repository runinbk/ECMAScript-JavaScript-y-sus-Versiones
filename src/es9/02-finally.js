// Promises

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        // if (true) {
        if (false) {
            resolve('Hey!!');
        } else {
            reject('Whoooops!!');
        }
    })
}

anotherFunction()
    .then(res => console.log(res))
    .catch(err => console.log(err))             // Que pasa cuando nuestra promesa termina ?
    .finally(() => console.log('Finnaly'));     // Para eso esta '.finally', para mostrar que la promesa ha terminado