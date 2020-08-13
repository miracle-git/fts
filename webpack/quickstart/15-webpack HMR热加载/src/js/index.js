/* 导入js */
import print from './print'

// 调用print
print('print模块')
// 启用热加载
if (module.hot) {
  module.hot.accept(['./print'], () => {
    print('print模块支持热加载')
  })
}
