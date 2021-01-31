const { sep, delimiter, win32, posix } = require('path');

console.log('PATH ', process.env.PATH);
console.log('sep ', sep); // '/'
console.log('delimiter ', delimiter); // ':'
console.log('win sep ', win32.sep); // '\'
console.log('win delimiter', win32.delimiter); // ';'
console.log('posix sep ', posix.sep); // '/'
console.log('posix delimiter', posix.delimiter); // ':'