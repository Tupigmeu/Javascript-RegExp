const {cpfs, ips} = require('./base');
console.log(cpfs)

const cpfValido = cpfs.match(/.[0-9]{3}?.[0-9]{3}?.[0-9]{3}?-.{2}/g)
console.log(`Os cps válidos são:`)
console.log(cpfValido)

// 250 - 255 25[0-5]
// 200 - 249 2[0-4][\d]
// 100 - 199 1[\d]{2}
// 10 - 99 [1-9][/d]
// 0 - 9 [\d]

const ipValido = ips.match(/((25[0-5]|2[0-4][\d]|1[0-9]{2}|[1-9][\d]|[\d])\.){3}(25[0-5]|2[0-4][\d]|1[0-9]{2}|[1-9][\d]|[\d])/g)
console.log(ips)
console.log("Os ips válidos são")
console.log(ipValido)


