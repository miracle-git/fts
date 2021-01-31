const http = require('http');
const server = http.createServer((req, res) => {
  console.log('current date', Date.now());
  console.error('system error', Date.now());
  // 模拟错误
  if (req.url === '/err') {
    throw new Error('system exception');
  }
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    error: 0,
    data: 'This is a pm2 server'
  }));
});

server.listen(8000, () => {
  console.log('server is running on http://localhost:8000');
});
