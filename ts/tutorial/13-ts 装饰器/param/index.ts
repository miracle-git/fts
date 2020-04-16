function param(target: any, method:string, index: number) {
  console.log(target, method, index)
}
class Person {
  constructor(private name: string, private age: number) {}
  getInfo(@param person: Person) {
    console.log(`${person.name} is ${person.age} years old`)
  }
}
// 实例化
const p = new Person('Miracle', 35)
p.getInfo(p)