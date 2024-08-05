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
    .catch(err => console.log(err));