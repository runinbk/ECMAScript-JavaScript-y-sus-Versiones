// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;

console.log(a, b);
console.log(fruits[0], a);      // tambien se puede acceder deacuerdo a la posision del array
console.log(fruits[0], b);      // aplica el coonsepto de desestructuracion y asiganrlos a una variable

// object destructuring

let user = { userName: 'Oscar', age: 34 };
let { userName, age } = user;
console.log(userName, age);
console.log(userName, user.age);

// Spread operator

let person = { name: 'Oscar', age: 28 };
let country = 'MX';

let data = { ...person, country }   // con estos 3 puntos (...) hacemoos la desestructuracion para mistrar los datos del objetos
let data1 = { person, country }     // muy diferente a cuando solo lo llamamos al objeto

console.log(data);
console.log(data1);

// Rest params

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);