const fs = require('fs');

// 异步写入
// fs.writeFile('./demo.txt', 'This is a demo file wrote by fs!', { encoding: 'utf8' }, (err) => {
//   if (err) throw err;
//   console.log('done!');
// });

const content = Buffer.from('This is a demo file wrote by fs!');
fs.writeFile('../file/demo.txt', content, (err) => {
  if (err) throw err;
  console.log('done!');
});
