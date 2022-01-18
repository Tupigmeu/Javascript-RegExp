const {html3, html} = require('./base')
console.log(html3)
console.log()


//Retrovisores("variaveis") - $1 $2 ...
// ?: -- nao guarda o retrovisor


// $1 abertura da tag
// $2 tag
// $3 conteudo da tag
// $4 fechamento da tag
// console.log(html3.match(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g)) 
console.log(html3.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1 salve $4'))