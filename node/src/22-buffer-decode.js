const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const buf = Buffer.from('这是一个中文字符串');

// 下面代码将会出现乱码
for (let i = 0; i < buf.length; i += 5) {
  const buffer = Buffer.allocUnsafe(5);
  buf.copy(buffer, 0, i);
  console.log(buffer.toString());
}
// 使用decoder解决乱码问题
for (let i = 0; i < buf.length; i += 5) {
  const buffer = Buffer.allocUnsafe(5);
  buf.copy(buffer, 0, i);
  console.log(decoder.write(buffer));
}