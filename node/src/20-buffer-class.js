console.log(Buffer.byteLength('node')); // 4
console.log(Buffer.byteLength('中国')); // 6
console.log(Buffer.isBuffer({})); // false
console.log(Buffer.isBuffer(Buffer.from([1, 2, 3]))); // true

const buf1 = Buffer.from('This ');
const buf2 = Buffer.from('is ');
const buf3 = Buffer.from('a ');
const buf4 = Buffer.from('buffer ');
const buf5 = Buffer.from('test!');

const buffer = Buffer.concat([buf1, buf2, buf3, buf4, buf5]);
console.log(buffer.toString());