// node nodejs-line
const fs = require('fs')
const rl = require('readline')

// 获取行数
let lines = 0
const rs = rl.createInterface({
  input: fs.createReadStream('../data/file.txt')
})
rs.on('line', line => {
  // console.log(line)
  lines++
})
rs.on('close', () => {
  console.log(`总行数: ${lines}`)
})