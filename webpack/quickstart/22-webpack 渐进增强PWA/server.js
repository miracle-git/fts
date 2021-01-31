/* 启动服务器
*  使用：node server.js | nodemon server.js
*/
const express = require('express')
const app = express()

app.use(express.static('dist', { maxAge: 1000 * 3600 }))
app.listen(3000, () => console.log('The server is starting...'))
