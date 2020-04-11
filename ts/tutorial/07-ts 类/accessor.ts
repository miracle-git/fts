// 访问修饰符(public,private,protected)
// public 可在当前类的内部和外部都可以使用
// private 只能在当前类的内部使用
// protected 可在当前类的内部和子类中使用
class Person {
  name: string // 默认不写访问修饰符就是public
  private age: number
  protected nickName: string = 'daniu'
  say() {
    console.log(`Hello ${this.name}`)
  }
}
class Student extends Person {
  learn() {
    console.log(`${this.nickName} is learning...`)
  }
}
// 实例化
const person = new Person()
person.name = 'Miracle'
person.say()
// person.age = 35
const student = new Student()
student.learn()