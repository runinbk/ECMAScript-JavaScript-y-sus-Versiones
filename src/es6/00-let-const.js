var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple';       // function scope
        let fruit2 = 'kiwi';        // block scope
        const fruit3 = 'Banana';    // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();