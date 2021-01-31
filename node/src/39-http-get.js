const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  console.log(`method: ${req.method}`);
  console.log(`url: ${req.url}`);

  req.query = qs.parse(req.url.split('?')[1]);
  res.end(JSON.stringify(req.query));
});

server.listen(8000, () => {
  console.log('server is running on http://localhost:8000');
});
