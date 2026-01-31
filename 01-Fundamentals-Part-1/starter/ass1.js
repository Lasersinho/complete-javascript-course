

// assignments 1

let country = "Peru"
let continent = "America del Sur"
const population = 34;
const language = 'Spanish';
console.log(country)
console.log(continent)
console.log(population)

/*
// assignments 2

let isIsland = false;
let lenguage;

console.log(typeof country);
console.log(typeof isIsland);
console.log(typeof continent);
console.log(typeof lenguage);



let age = 30;
age = 31;


const nac_carlos = '14 de octubre';

console.log(nac_carlos)



// assignnments 3

const language = 'Spanish';
const country = 'Portugal';
const continent = 'Europe';
const isIsland = false;
isIsland = true;



const now = 2037;
const ageLaser = now - 2005;
const ageLoko = now - 2006;
console.log(ageLaser, ageLoko);

console.log(ageLaser * 2, ageLaser % 10);

const firstName = 'Carlos';
const lastName = 'Smith';

console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
console.log(x);

console.log(ageLaser > ageLoko);

const isFullAge = ageLoko >= 18;

console.log(isFullAge)



// assignments 4

console.log(population / 2);
const popUp = population + 1;
console.log(popUp);
const finland = 6;
console.log(finland > population)
console.log(33 > population)
const language = 'Spanish';
const description = country + ' is in America, and its ' + population + ' million people speak ' + language;
console.log(description)


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// La pesadilla de los espacios y los símbolos +
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);
// "I'm Jonas, a 46 years old teacher!"


const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);
// Mismo resultado, código mucho más limpio.



// assignments 5

const description = `${country} is in America, and its ${population} million people speak ${language}`

console.log(description)

console.log('String with \nmultiple \nlines'); // \n para salto de línea

console.log(`String with
multiple
lines`); // Solo dale Enter y listo



const age = 15;

if (age >= 18) {
    // Si tiene 18 o más...
    console.log('Sarah can start driving license 🚗');
} else {
    // Si tiene menos de 18...
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :D`);
}
// Resultado: "Sarah is too young. Wait another 3 years :)"

const birthYear = 2012;
let century; // 1. Declaramos la variable AFUERA (vacía)

if (birthYear <= 2000) {
    century = 20; // 2. La reasignamos dentro
} else {
    century = 21;
}

console.log(century); // 21 ✅



// assignments 6

if (population > 33) {
    console.log(`${country}'s population is ${population - 33} million above average`);
}
else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}




// type conversion
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Carlos'));
console.log(typeof NaN);

console.log(String(20), 20);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('40' - '30' - 3);

let n = '1' + 1;
n = n - 1;
console.log(n);



const money = 0; // 0 es Falsy

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!"); // Se ejecuta esto 👈
}

*/