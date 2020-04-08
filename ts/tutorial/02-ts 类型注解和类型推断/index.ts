// type annotation 类型注解：明确告诉ts变量具体数据类型
// type inference 类型推断：ts可通过上下文环境自动尝试分析出变量数据类型
let userName: string = 'Miracle' // 类型注解(显式指定，因为可推断所以非必需)
let userAge = 35 // 类型推断(userAge为number类型)

const a = 1, b = 2
const total = a + b // 类型推断(total为number类型)

const sum = (a: number, b: number) => a + b // 此时无法推断a,b类型，需要类型注解
const result = sum(1,2) // 类型推断(result为number类型)

// 总结：ts虽推荐为每一个变量或方法使用类型注解，但如果可通过类型推断分析出类型，则不需要类型注解(使用也没问题)；
// 反之，无法通过类型推断分析其类型的情况，一定需要类型注解。

// 使用JS内置函数(如JSON.parse)时，ts可能无法进行类型推断，可使用type来定义其类型
type User = { name: string }
const jsonData = '{"name": "Miracle"}'
const userInfo: User = JSON.parse(jsonData)