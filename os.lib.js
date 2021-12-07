const os= require('os');

console.log('Total Memory :', os.totalmem());
console.log('Total Free Memory inside your system is :', os.freemem() / 1000000000);
console.log('OS Type :', os.type());
console.log('Home Directory :', os.homedir());
console.log('Platform :', os.platform());
console.log('Network Interfaces :', os.networkInterfaces());
console.log('Uptime :', os.uptime());