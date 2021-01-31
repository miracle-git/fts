const modA = require('./05-module-a');
const modB = require('./05-module-b'); // 这句话不会影响输出
// module b: A
// module a: BB
console.log(modA.test); // AA
console.log(modB.test); // BB