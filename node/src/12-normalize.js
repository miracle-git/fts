const { normalize } = require('path');

console.log(normalize('/usr//local/bin'));
console.log(normalize('/usr//local/../bin'));