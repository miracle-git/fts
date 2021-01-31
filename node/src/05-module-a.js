module.exports.test = 'A';

const modB = require('./05-module-b');
console.log('module a: ', modB.test);

module.exports.test = 'AA';