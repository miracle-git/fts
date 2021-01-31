// 定义函数(与JS基本保持一致)
function hello1() {}
const hello2 = function () {}
const hello3 = () => {}
// 带参数的函数(建议参数和返回值都应该使用类型注解)
const sum = (a: number, b: number): number => a + b
// 带解构赋值的参数(注意格式，哪怕只有一个解构属性也要遵循此格式)
const sum2 = ({ a, b}: { a: number, b: number }): number => a + b
// const sum3 = ({ a: number, b: number }): number => a + b // ❌
const sum4 = ({ a }: { a: number }): number => a
// 无返回值的函数(建议将返回值类型使用void)
const hello4 = (name: string):void => console.log(`hello ${name}`)
// 从不返回(常见于异常，错误或死循环, 之后的语句永远不可能执行)
const forever = (): never => {
  // throw new Error()
  while (true) {}
  console.log('无效代码') // 永远不可能执行
}