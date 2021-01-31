/* 导入iconfont文件 */
import './iconfont.css'

/* 更新加入新的代码，刷新浏览器需要重新构建才能看到新加入的功能 */
/* 因此需要配置devServer */
function add(x, y) {
  return x + y
}

const sum = add(10, 20)
console.log('sum = ' + sum)
