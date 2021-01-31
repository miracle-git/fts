const { basename, dirname, extname } = require('path');
const filePath = '/usr/local/data/node.txt';

console.log(basename(filePath)); // node.text
console.log(dirname(filePath)); // /usr/local/data
console.log(extname(filePath)); // .txt