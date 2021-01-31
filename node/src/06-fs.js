const fs = require('fs');

const result = fs.readFile('./src/06-fs.js', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(data); // 输出Buffer
    console.log(data.toString());
  }
});

console.log(result); // undefined(优先输出)