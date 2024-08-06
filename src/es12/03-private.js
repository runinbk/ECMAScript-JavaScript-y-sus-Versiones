
// Class

// Declarando la clase
class User { }

// instancia de una clase
const newUser = new User();

class user {
    // methods
    greeting() {
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(gndx.greeting());

// Constructor
class user {
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
};

const david = new user();

// this <= hace referencia al objeto padre que lo contiene
class user {
    constructor(name) {
        this.name = name;
    }
    // methods
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user('Ana');
console.log(ana.greeting());


// Setters & Getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // methods
    #speak() {              // '#' hace que se vuelva un metodo privado solamente para esa clase
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }

    get #uAge() {            // '#' hace que se vuelva un metodo privado solamente para esa clase
        return this.age;
    }
    set #uAge(n) {           // '#' hace que se vuelva un metodo privado solamente para esa clase
        this.age = n;
    }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);