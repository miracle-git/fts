/* 导入iconfont文件 */
import '../css/iconfont.css'
/* 导入less */
import '../css/index.less'
/* 导入js */
import print from './print'

/* 功能脚本 */
function add(x, y) {
  return x + y
}

const sum = add(10, 20)
console.log('sum = ' + sum)
// 调用print
print('print模块')
// 启用热加载
if (module.hot) {
  module.hot.accept(['./print'], () => {
    print('print模块支持热加载')
  })
}
