const fs = require('fs');

const ws = fs.createWriteStream('./demo.txt');
const timer = setInterval(() => {
  const num = parseInt(Math.random() * 10);
  console.log(num);
  if (num < 8) {
    ws.write(num + ''); // 只能为string或Buffer
  } else {
    clearInterval(timer);
    ws.end();
  }
}, 200);

ws.on('finish', () => {
  console.log('done!');
});