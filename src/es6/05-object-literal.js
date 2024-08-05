// Object Literal

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,    // ES6
        id: uId     // ES5
    }
}

console.log(newUser('gndx', 34, 'MX', 1));