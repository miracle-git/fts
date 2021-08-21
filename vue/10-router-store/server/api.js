const express = require('express')
const app = express()
const port = 3000
const data = [
  { name: 'vue', price: 800, type: 'dynamic' },
  { name: 'react', price: 600, type: 'nested' },
  { name: 'angular', price: 300, type: 'nested' },
  { name: 'node', price: 500, type: 'push' }
]

app.get('/api/courses', (req, res) => {
  setTimeout(() => {
    res.json(data)
  }, 1000)
})

app.get('/api/course/detail', (req, res) => {
  setTimeout(() => {
    res.json(data.find(item => item.name === req.query.name))
  }, 1000)
})

app.listen(port, () => console.log(`server is starting on http://localhost:${port}`))
