// 标准输入输出
// process.stdin.pipe(process.stdout);
/*
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(res);
  }
});
server.listen(8000);
*/
// 复制文件
/*
const fs = require('fs');
const path = require('path');
const dataFile = path.resolve(__dirname, '../file', 'data.txt');
const dataBakFile = path.resolve(__dirname, '../file', 'data-bak.txt');

const rs = fs.createReadStream(dataFile);
const ws = fs.createWriteStream(dataBakFile);
rs.pipe(ws);
rs.on('data', chunk => console.log(chunk.toString()));
rs.on('end', () => console.log('copy done'));
*/
// 读取文件流
const fs = require('fs');
const http = require('http');
const path = require('path');
const file = path.resolve(__dirname, '../file', 'data.txt');
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const rs = fs.createReadStream(file);
    rs.pipe(res);
  }
});
server.listen(8000);
