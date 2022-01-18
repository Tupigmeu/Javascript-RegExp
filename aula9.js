const {lookahead} = require('./base')
// console.log(lookahead)

// const regExp = /.+[^in]active$/gm

// Positive lookahead (com active) (?=)
/* const postiveLookahead = /.+(?=[^in]active)/gim
console.log(lookahead.match(postiveLookahead)) */

//Positive lookahead (com inactive) (?=)
/* const postiveLookahead = /.+(?=\s+inactive)/gim
console.log(lookahead.match(postiveLookahead)) */


//Negative lookahead (sem active) (neganto o active) (?!)
/* const negativeLookahead = /^(?!.+[^in]active).+$/gim
console.log(lookahead.match(negativeLookahead)) */

//Negative lookahead (com active) (negando o inactive) (?!)
/* const negativeLookahead = /^(?!.+inactive).+$/gim
console.log(lookahead.match(negativeLookahead)) */

//Positive lookbehind (com online) (?<=)
// const positiveLookbehind = /(?<=ONLINE\s+)\S.*/gim
// console.log(lookahead.match(positiveLookbehind))

//Negative lookbehind (com offiline) (negando o online) (?<!)
// const negativeLookbehind = /^.+(?<!ONLINE.+)$/gim
// console.log(lookahead.match(negativeLookbehind))

const cpf = `
084.642.840-52
843.213.71.13
444.444.444-44
128.458.952-82
`

// negando (?!^(\d)\1{2}\.\1{3}\.\1{3}\-\1{2}$)
const valiadorDeCpf = /^(?!^(\d)\1{2}\.\1{3}\.\1{3}\-\1{2}$)(\d{3}.){2}\d{3}-\d{2}$/gm;
console.log(cpf.match(valiadorDeCpf))