const { cpfs, cpfs2 } = require('./base')

// ^ Começa com 
// $ Termina com
// [^] Negação
// m multiline


const cpfRegExp = (/(\d{3}\.){2}\d{3}\-\d{2}/gm);

console.log(cpfs)
console.log(cpfs2)
console.log('\n')
console.log(cpfs.match(cpfRegExp));