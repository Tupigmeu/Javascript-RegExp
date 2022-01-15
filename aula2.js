const { texto } = require('./base');
const regExp1 = /João|Maria/gi;

// (...(..))(...)(...) $1 $2 $3 $4


//console.log(texto.match(regExp1));
//console.log(texto.replace(/(João|Maria)/gi, "salve' $1 'salve" ));
console.log(texto.replace(/(João|Maria)/gi, function(input) {return "alguma coisa " + input.toUpperCase()  + " alguma outra coisa";}))