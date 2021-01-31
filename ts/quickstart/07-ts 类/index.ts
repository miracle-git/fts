class Person {
  name: string = 'Miracle'
  getName() {
    return this.name
  }
}
// 继承
class Student extends Person {
  // 继承
  learn() {
    console.log(`${this.name} is learning...`)
  }
  // 重写
  getName() {
    return super.getName() + ' He'
  }
}

// 实例化
const person = new Person()
console.log(person.getName())

const student = new Student()
student.learn()
console.log(student.getName())