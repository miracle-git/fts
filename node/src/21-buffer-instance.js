const buf1 = Buffer.from('This is a buffer test!');
const buf2 = Buffer.alloc(10);
buf2[0] = 2;
const buf3 = Buffer.allocUnsafe(10);
const buf4 = Buffer.from('node');
const buf5 = Buffer.from('node');
const buf6 = Buffer.from('nodejs');

console.log(buf1.length); // 22
console.log(buf2.length); // 10
console.log(buf1.toString()); // This is a buffer test!
console.log(buf1.toString('base64')); // VGhpcyBpcyBhIGJ1ZmZlciB0ZXN0IQ==
console.log(buf3.fill(10, 2, 6));
console.log(buf4.equals(buf5)); // true
console.log(buf4.equals(buf6)); // false
console.log(buf1.indexOf('s')); // 3
console.log(buf1.lastIndexOf('s')); // 19
console.log(buf1.indexOf('node')); // -1