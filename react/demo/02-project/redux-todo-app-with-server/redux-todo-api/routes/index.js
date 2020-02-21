var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'React - Todo App Api' });
});

router.get('/api/todos', function(req, res, next) {
  const data = require('../data/todo');
  res.json(data);
});

module.exports = router;
