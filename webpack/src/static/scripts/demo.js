const log = (target) => console.log(target.gender);
const gen = function *() { yield 1; };
console.log(gen().next());
console.log("miracle".includes('m'));

@log
export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static gender = 'male';
  greeting() {
    console.log(`Hello ${this.name}!`);
  }
}

export class Student extends User {
  constructor(score, name, age) {
    super(name, age);
    this.score = score;
  }

  greeting() {
    console.log(`Hello ${this.name}, I have ${this.score} fen!`);
  }
}