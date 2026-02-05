// Usar modo strict
'use strict';

/*


let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;

console.log(hasDriversLicense)

const private = 535;

const if = 23;

// Ayuda a debugear, ni if ni private se pueden utilizar porque son declaraciones

// 1. Declaración de la función (Definición)
function logger() {
    // Cuerpo de la función (Function Body)
    console.log('Mi nombre es Carlos');
}

// 2. Invocación / Llamada / Ejecución ==== Se refieren a lo mismo
logger(); // Se ejecuta el código de arriba
logger(); // Se ejecuta otra vez
logger(); // Y otra vez


function fruitProcessor(apples, oranges) {
    // 'apples' y 'oranges' son PARÁMETROS

    // Procesamiento (Lógica)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    // Output (Devolver valor)
    return juice;
}

// Llamada 1: Pasamos 5 y 0 como ARGUMENTOS
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// Salida: "Juice with 5 apples and 0 oranges."

// Llamada 2: Reutilizamos la lógica con diferentes datos
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
// Salida: "Juice with 2 apples and 4 oranges."




//Assignment - Function

function describeCountry(country, population, capitalCity) {
    return console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`)
}

describeCountry("Peru", 34, "Lima")
describeCountry("Chile", 11, "Santiago De Chile")
describeCountry("Argentina", 54, "Buenos Aires")




// Declaración: Tiene nombre 'calcAge1'
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// Invocación
const age1 = calcAge1(1991);
console.log(age1); // 46


// Expresión: Función anónima guardada en la variable 'calcAge2'
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

// Invocación (usamos el nombre de la variable)
const age2 = calcAge2(1991);
console.log(age2); // 46


// FUNCIONA
const age3 = calcAge3(1991);

function calcAge3(birthYear) {
    return 2037 - birthYear;
}
console.log(age3);

//Assignment func vs decl

function percentageOfWorld1(population) {
    return 100 * population / 7900;
}

const peru = percentageOfWorld1(33)
const uruguay = percentageOfWorld1(3)
const china = percentageOfWorld1(1441)

console.log(peru)
console.log(uruguay)
console.log(china)



// Antes (Function Expression)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

// AHORA (Arrow Function)
const calcAge3 = birthYear => 2037 - birthYear;

// La flecha "apunta" a lo que queremos devolver
// const calcAge3 = birthYear => 2037 - birthYear;

// Paréntesis obligatorios (birthYear, firstName)
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));



// 1. La función auxiliar (La máquina de cortar)
function cutFruitPieces(fruit) {
    return fruit * 4;
}

// 2. La función principal (El procesador)
function fruitProcessor(apples, oranges) {

    // Aquí LLAMAMOS a la otra función
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

// 3. Ejecución
console.log(fruitProcessor(2, 3));


//Assignment function conections

function percentageOfWorld1(population) {
    return `${(100 * population / 7900).toFixed(2)}%`;
}

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world`
}

console.log(describePopulation("Peru", 33));
console.log(describePopulation("Mexico", 141));
console.log(describePopulation("USA", 200));




// ========== ARRAYS ==========

// 1. Sintaxis Literal (Bracket Syntax) - ¡LA MÁS COMÚN! ✅
const friends = ['Michael', 'Steven', 'Peter'];

// 2. Sintaxis "New Array" (Menos común) ⚠️
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // 'Michael'
console.log(friends[2]); // 'Peter'

console.log(friends.length); // 3 (Hay 3 amigos)

// Dentro de los corchetes podemos poner EXPRESIONES matemáticas
console.log(friends[friends.length - 1]); // 'Peter'


const friends = ['Michael', 'Steven', 'Peter'];

// ✅ ESTO ES VÁLIDO (Mutar elementos individuales)
friends[2] = 'Jay';
// Resultado: ['Michael', 'Steven', 'Jay']

// ❌ ESTO ES ILEGAL (Reasignar la variable entera)
// friends = ['Bob', 'Alice'];
// Error: Assignment to constant variable


const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, friends];
// Resultado: ['Jonas', 'Schmedtmann', 46, Array(3)]

console.log(jonas);
console.table(jonas);



// Assignment array

function percentageOfWorld1(population) {
    return `${(100 * population / 7900).toFixed(2)}%`;
}

const population = [33, 11, 8, 14];
console.log(population.length === 4);

const percentages = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2]), percentageOfWorld1(population[3])];
console.table(percentages);



const friends = ['Michael', 'Steven', 'Peter'];

// Agregar al final
const newLength = friends.push('Jay');
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // 4

// Agregar al inicio
friends.unshift('John');
// ['John', 'Michael', 'Steven', 'Peter', 'Jay']
console.log(friends)

// Quitar el último ('Jay')
const removedFriend = friends.pop();
console.log(removedFriend); // 'Jay'

// Quitar el primero ('John')
friends.shift(); 



const jonasArray = ['Jonas', 'Schmedtmann', 46, 'Teacher'];

const jonas = {
    firstName: 'Jonas',      // Key: Value
    lastName: 'Schmedtmann',
    age: 2037 - 1991,        // Podemos usar expresiones
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'] // Un array dentro de un objeto
};



//Assignment Basic Array Operations

const neighbours = [`Chile`, `Bolivia`, `Ecuador`, `Brasil`, `Colombia`]

neighbours.push(`Utopia`)
neighbours.pop(`Utopia`)

if (neighbours.includes(`Germany`)) {
    console.log(`It's an european country`)
} else {
    console.log('Probable not a central european country :D')
}

neighbours[neighbours.indexOf(`Chile`)] = `Republica de Chile`;
console.log(neighbours)



//Assignment Introduction to objects

const myCountry = {
    country: `Peru`,
    capital: `Lima`,
    language: `Spanish`,
    population: 33,
    neighbours: [`Chile`, `Bolivia`, `Ecuador`, `Brasil`, `Colombia`],

}






console.log(jonas.lastName); // 'Schmedtmann'
console.log(jonas.age);      // 46


console.log(jonas['lastName']); // 'Schmedtmann'

// EJEMPLO DE EXPRESIÓN (COMPUTED PROPERTY NAME)
const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // 'Jonas'
console.log(jonas['last' + nameKey]);  // 'Schmedtmann'

// const interestedIn = prompt('¿Qué quieres saber? (firstName, job, age...)');

// ❌ Dot Notation FALLA
console.log(jonas.interestedIn);
// undefined (Busca literalmente una propiedad llamada "interestedIn")

// ✅ Bracket Notation FUNCIONA
console.log(jonas[interestedIn]);
// Si el usuario escribe "job", JS evalúa jonas['job'] -> 'Teacher'


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! 🚫');
}

// Usando Dot
jonas.location = 'Portugal';

// Usando Brackets
jonas['twitter'] = '@jonasschmedtman';



const jonas = {
    firstName: 'Jonas',      // Key: Value
    lastName: 'Schmedtmann',
    age: 2037 - 1991,        // Podemos usar expresiones
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'] // Un array dentro de un objeto
};


console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



//Assignment Dot vs Bracket Notation

const myCountry = {
    country: `Peru`,
    capital: `Lima`,
    language: `Spanish`,
    population: 33,
    neighbours: [`Chile`, `Bolivia`, `Ecuador`, `Brasil`, `Colombia`],

}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry[`population`] = myCountry[`population`] - 2;

console.log(myCountry.population)

myCountry.population = myCountry.population + 2;
console.log(myCountry.population)



const jonas = {
    firstName: 'Jonas',
    birthYear: 1991,

    // Esto es un MÉTODO (Function Expression)
    calcAge: function () {
        return 2037 - 1991;
    }
};



console.log(jonas.calcAge()); // 46



const jonas = {
    birthYear: 1991,

    calcAge: function() {
        // 'this' es 'jonas'
        console.log(this); 
        return 2037 - this.birthYear; // Es igual a: jonas.birthYear
    }
};

// Quien llama es 'jonas' (está a la izquierda del punto)
jonas.calcAge(); 



//Mi solucion:

const jonas = {
    firstName: 'Jonas',
    birthYear: 1991,
    calcAge: function () {
        // Calculamos la edad y creamos una nueva propiedad 'age'
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    driversLicense: true,

    profesion: `teacher`,


    getSummary: function () {

        this.calcAge();
        const lincenseStr = this.driversLicense ? `a` : `no`;

        return `${this.firstName} is a ${this.age}-year old ${this.profesion}, and he has ${lincenseStr} driver's license`
    }
};

console.log(jonas.getSummary())


// 1. Llamamos al método una vez (calcula y guarda)
jonas.calcAge();

// 2. Ahora la propiedad .age EXISTE en el objeto
console.log(jonas.age); // 46
console.log(jonas.age); // 46 (Ya no necesita recalcular)


//Solucion Jonas:

const jonas = {
    firstName: 'Jonas',
    birthYear: 1991,
    job: 'teacher',
    hasDriversLicense: true,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        // Aseguramos que la edad esté calculada llamando al método aquí
        // O usamos this.age si asumimos que ya se calculó.
        
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(jonas.getSummary());



//Asignment Object Methods

const myCountry = {
    country: `Peru`,
    capital: `Lima`,
    language: `spanish`,
    population: 33,
    neighbours: [`Chile`, `Bolivia`, `Ecuador`, `Brasil`, `Colombia`],



    describe: function () {

        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`


    },

    checkIsland: function () {

        this.isIsland = this.neighbours.length === 0;
        return this.isIsland;
    },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());


*/
