// 统一定义对象类型
// 1.JS定义：user本身应该包含一个name属性的对象，但无法确定且可能为其他类型,undefined或null,导致代码运行异常
const getName1 = (user) => user.name
const setName1 = (user, name) => user.name = name
// 2.TS定义：为user添加类型注解, 此时可确定user类型，但代码重复性很高
const getName2 = (user: { name: string }): string => user.name
const setName2 = (user: { name: string }, name: string): void => { user.name = name }
// 3.接口定义：抽离user类型为接口，可实现代码重用
interface Person {
  // readonly name: string, // 只读属性
  name: string,
  age?: number, // age为可选属性
  [propName: string]: any, // 扩展属性(解决字面量传参多余属性的问题)
  say?(): string // 还可传入方法
}
const getName3 = (user: Person): string => user.name
const setName3 = (user: Person, name: string): void => { user.name = name }
// 接口与类型别名的区别：类型别名可直接为基础类型取别名，如：type str = string, 接口不可以，但优先推荐使用接口
const user = { name: 'Miracle', gender: 'Male' } // 缓存变量不会强检验，但直接传入对象字面量会强检验
const userName1 = getName3(user)
const userName2 = getName3({ name: 'Miracle', gender: 'Male' }) // 此时会报错，可通过扩展属性修复
// 类实现接口需使用implements关键字并实现内部成员
class User implements Person {
  name: string
}
// 接口之间可继承
interface Student extends Person {
  learn()
}
// 多重继承接口必须实现所有接口中的成员
const getName4 = (user: Student): string => user.name
const setName4 = (user: Student, name: string): void => { user.name = name }
const stu = { name: 'Miracle', gender: 'Male', learn() {} }
const userName3 = getName4(stu)
// 总结：interface最终编译成JS代码不会有任何关于其本身的信息