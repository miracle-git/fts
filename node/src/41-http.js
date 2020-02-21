const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const urls = url.split('?');
  const path = urls[0];
  const query = qs.parse(urls[1]);

  res.setHeader('Content-Type', 'application/json');
  if (method === 'GET') {
    res.end(JSON.stringify({ method, url, path, query }));
  }
  if (method === 'POST') {
    let data = '';
    req.on('data', chunk => {
      data += chunk.toString();
    });
    req.on('end', () => {
      res.end(JSON.stringify({ method, url, path, query, data }));
    });
  }
});

server.listen(8000, () => {
  console.log('server is running on http://localhost:8000');
});
