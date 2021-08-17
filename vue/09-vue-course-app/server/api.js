const express = require('express')
const app = express()
const port = 3000

app.get('/api/courses', (req, res) => {
  setTimeout(() => {
    res.json([
      { name: 'vue', price: 800 },
      { name: 'react', price: 600 },
      { name: 'node', price: 500 }
    ])
  }, 1000)
})

app.listen(port, () => console.log(`server is starting on http://localhost:${port}`))
