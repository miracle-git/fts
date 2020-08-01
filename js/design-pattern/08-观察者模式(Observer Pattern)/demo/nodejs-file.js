// node nodejs-file
const fs = require('fs')

// 读取文件
let length = 0
const rs = fs.createReadStream('../data/file.txt')
rs.on('data', chunk => {
  length += chunk.toString().length
})
rs.on('end', () => {
  console.log(`字符数: ${length}`)
})
