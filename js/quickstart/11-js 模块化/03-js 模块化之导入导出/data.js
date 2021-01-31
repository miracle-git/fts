export const web = 'https://github.com/miracle-git'
export default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  show() {
    console.log(`${this.name} is ${this.age} years old.`)
  }
}