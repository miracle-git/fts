// 使用typeof语法
function add(a: number | string, b: number | string) {
  if (typeof a === 'string' || typeof b === 'string') {
    return `${a}${b}`
  }
  return a + b
}