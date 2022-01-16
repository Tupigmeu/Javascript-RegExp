const {alfabeto} = require('./base')
console.log(alfabeto)

// [abc] --> Conjunto [^] --> Negação
alfabetoUppercase = alfabeto.match(/[A-Z]/g)
alfabetoLowercase = alfabeto.match(/[a-z]/g)
numeros = alfabeto.match(/[0-9]/g)

console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // Negação
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // Unicode
                                //Shorthand

//Todos
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W/g)); //Negação

//Numeros
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g)); //Negação

//Espaços em branco
console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S+/g)); //Negação */