const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    console.log(`content-type: ${req.headers['content-type']}`);

    let data = '';
    req.on('data', chunk => {
      data += chunk.toString();
    });
    req.on('end', () => {
      console.log(`data: ${data}`);
      res.end('request end');
    });
  }
});

server.listen(8000, () => {
  console.log('server is running on http://localhost:8000');
});
