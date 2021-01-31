// 函数泛型
function join<T>(a: T, b: T) {
  return `${a}${b}`
}
// 可指定多个泛型类型
function joint<T, K>(a: T, b: K) {
  return `${a}${b}`
}
// 类型变换
function map<T>(params: T[]) {
  return params
}
// 测试
console.log(join<string>('x', 'y'))
console.log(join<number>(1, 2))
console.log(joint(1, '1'))  // 此时ts类型推断<number,string>
console.log(map<string>(['a', 'b', 'c']))
