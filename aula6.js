const {cpfs, cpfs2, ips} = require('./base');
// console.log(cpfs)



console.log(ips)
const ipValido = ips.match(/((25[0-5]|2[0-4][\d]|1[0-9]{2}|[1-9][\d]|[\d])\.){3}(25[0-5]|2[0-4][\d]|1[0-9]{2}|[1-9][\d]|[\d])/g)


console.log("esses são os ip válidos")
console.log(ipValido)



/* for (let i = 0; i <= 300; i++) {
    let ip = `${i}.${i}.${i}.${i}`
    const ipValido = ip.match(/((25[0-5]|2[0-4][\d]|1[0-9]{2}|[1-9][\d]|[\d])\.){3}(25[0-5]|2[0-4][\d]|1[0-9]{2}|[1-9][\d]|[\d])/g)
    console.log(ip, ipValido)
    
} */