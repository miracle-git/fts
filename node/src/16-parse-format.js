const { parse, format } = require('path');
const filePath = '/usr/local/data/node.txt';
const result = parse(filePath);

console.log(result);
console.log(format(result)); // dir优先级高于root, base优先级高于name,ext