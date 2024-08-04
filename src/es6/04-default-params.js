// Antiguamente...
function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO');


// Con ES6+
function newAdmin(name = 'Osacar', age = 32, country = 'CL') {
    console.log(name, age, country)
}

newAdmin();
newAdmin('Ana', 28, 'PE');