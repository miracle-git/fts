module.exports.test = 'B';

const modA = require('./05-module-a');
console.log('module b: ', modA.test);

module.exports.test = 'BB';