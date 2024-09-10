// 基础类型
const name: string = 'Miracle'
const age: number = 30
const married: boolean = false
// null&undefined
let str1: string = null
let str2: string = undefined
// any&void&never
let t
function fn1(): void {}
function fn2(): never {
  // throw new Error()
  while (true) {}
}
// 数据&元组
const arr1: string[] = ['1', '2', '3']
const arr2: Array<string> = ['1', '2', '3']
const arr3: (string | number)[] = [1, '2', 3]
const arr4: Array<string | number> = [1, '2', 3]
const tuple: [string, number, boolean] = ['Miracle', 30, false]
// 联合类型
const union: string | number = 'Miracle'
// 枚举类型
enum Season {
  SPRING,
  SUMMER,
  ALTUMN,
  WINTER
}
const enum Color {
  RED,
  GREEN,
  BLACK
}
// 对象类型
const create = (target: object) => {}
create(function() {})
create({})
create([])
// Symbol&BigInt
const s1 = Symbol('1')
const s2 = Symbol.for('2')
const b1: bigint = BigInt(Number.MAX_SAFE_INTEGER + 100)

export {
  name,
  age,
  married,
  str1,
  str2,
  t,
  fn1,
  fn2,
  arr1, 
  arr2,
  arr3,
  arr4,
  tuple,
  union,
  Season,
  Color,
  create,
  s1,
  s2,
  b1
}