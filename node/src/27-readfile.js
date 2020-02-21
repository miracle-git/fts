const fs = require('fs');

// 异步读取(推荐)
fs.readFile('./src/01-run.js', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('async:');
  console.log(data);
});

// 同步读取
const result = fs.readFileSync('./src/01-run.js', 'utf8');
console.log('sync:');
console.log(result);