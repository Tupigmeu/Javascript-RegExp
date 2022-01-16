const {texto, arquivos} = require('./base');
// console.log(texto);

// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// {n,m} min, max
// {x} especifico

/* const regExp = /Jo+ão+/gi;
console.log(texto.match(regExp)) */

const regExp2 = /\.jpe*g/gi;

for (const arquivo of arquivos){
    console.log(arquivo, arquivo.match(regExp2))
}
