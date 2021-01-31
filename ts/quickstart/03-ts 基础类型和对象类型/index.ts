// 基础类型：number, string, boolean, symbol, any, void, undefined, null
const userName: string = 'Miracle'
const age: number = 35
const visible: boolean = false
// 可以对同一个变量定义多重类型
let userNo: string | number = 1
userNo = '001'
// 对象类型：{}, [], class, function
// {}
const user: {
  name: string,
  age: number
} = {
  name: 'Miracle',
  age: 35
}
// []
const numbers: number[] = [1, 2, 3]
// class
class Person {}
const miracle: Person = new Person()
// function
const sum: (a: number, b: number) => number = (a, b) => a + b
