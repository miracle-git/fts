// 使用instanceof语法
class NumberObj {
  count: number
}
function add(a: object | NumberObj, b: number | NumberObj) {
  if (a instanceof NumberObj && b instanceof NumberObj) {
    return a.count + b.count
  }
  return 0
}