// 抽象类
abstract class Shape {
  width: number // 也可包含实例成员
  abstract getArea(): number
}
// 子类(实现抽象方法)
class Circle extends Shape {
  getArea(): number {
    return this.width
  }
}
class Square extends Shape {
  getArea(): number {
    return this.width * 2
  }
}
// 接口
interface User {
  name: string
}
interface Student extends User {
  learn()
}
interface Teacher extends User {
  teach()
}
// 定义方法
const getUserInfo = (user: User) => {
  console.log(user.name)
}
// 实例化
const student: Student = {
  name: 'Miracle',
  learn() {
    console.log(`${this.name} is learning...`)
  }
}
const teacher: Teacher = {
  name: 'Jack',
  teach() {
    console.log(`${this.name} is teaching...`)
  }
}
// 调用
getUserInfo(student)
getUserInfo(teacher)