// const express = require('express');
const express = require('./48-node-express');
const app = express();
const port = 8000;

app.use((req, res, next) => {
  console.log('express request is beginning...', req.method, req.url);
  next();
});

app.use((req, res, next) => {
  // 假设处理cookie
  console.log('handling the cookie');
  req.cookie = {
    user: 'Miracle'
  };
  next();
});

app.use('/api', (req, res, next) => {
  console.log('handling api routes');
  next();
});

app.get('/api', (req, res, next) => {
  console.log('get api routes');
  next();
});

const loginCheck = (req, res, next) => {
  setTimeout(() => {
    console.log('mock: login successfully');
    next();
  });
};

app.get('/api/get-cookie', loginCheck, (req, res, next) => {
  console.log('get /api/get-cookie');
  res.json({
    error: 0,
    data: req.cookie
  });
});

app.listen(port, () => {
  console.log(`express server is running on ${port}`);
});
