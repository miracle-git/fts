// 单一类型
const arr: number[] = [1, 2, 3]
// 多重类型
const arr2: (number | string)[] = [1, 'Miracle', 2, 'He']
// 对象类型
const arr3: { name: string, age: number }[] = [{ name: 'Miracle', age: 35 }]
// 可用类型别名简化
type User = { name: string, age: number }
const arr4: User[] = [{ name: 'Miracle', age: 35 }]

// 元组：特殊数组类型(存储多重类型，长度固定)，但元素顺序必须固定
const tuple: [string, number, boolean] = ['Miracle', 35, true]
const userList: [string, number, boolean][] = [
  ['Miracle', 35, true],
  ['Jack', 32, false],
  ['Tom', 40, true]
]