// 构造器(实例化时自动执行)
class Person {
  /*
  name: string
  constructor(name: string) {
    this.name = name
  }*/
  // 简化
  constructor(public name: string) {}
}
// 实例化
const person = new Person('Miracle')
console.log(person.name)

class Student extends Person {
  constructor(public name: string,
              public age: number) {
    super(name); // 子类构造器必须调用父类构造器, 即使父类未声明构造器，也需使用super()调用
  }
  say() {
    console.log(`Hello ${this.name}, you are ${this.age} years old`)
  }
}
const student = new Student('Jack', 35)
student.say()