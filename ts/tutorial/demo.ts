console.log('hello');
console.log('hello');

let num: number | string = 1;
num = '2';

interface Point {
  x: number;
  y: number;
}

const point: Point = {
  x: 3,
  y: 4
};

const user: {
  name: string;
  age: number;
} = {
  name: 'Miracle',
  age: 35
};

type User = { name: string; age: number };
class Student {
  name: string;
  age: number;
}

const numbers: (string | number)[] = [1, '2', 3];
const users: User[] = [{ name: 'Miracle', age: 35 }];
const students: Student[] = [{ name: 'Miracle', age: 35 }];
const userInfo: [string, string, number] = ['Miracle', 'He', 35];
const userList: [string, string, number][] = [
  ['001', 'Miracle', 35],
  ['002', 'Jack', 40],
  ['003', 'Tom', 28]
];

interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any;
  say?(): string;
}

interface Teacher extends Person {
  teach(): void;
}

class TeacherInfo implements Teacher {
  name: string;
  teach() {}
}

const getPersonName = (person: Person) => {
  return person.name;
};
const setPersonName = (person: Person, name: string) => {
  person.name = name;
};

const person = {
  name: 'Miracle',
  gender: 'Male',
  say() {
    return 'hello ' + this.name;
  }
};

const userName = getPersonName(person);
const myName = getPersonName({
  name: 'Miracle',
  gender: 'Male'
});

setPersonName(person, 'Jack');

const getTotal: () => number = () => {
  return 100;
};

// 函数式接口
interface SayHello {
  (name: string): string;
}

const say: SayHello = (name: string) => {
  return 'hello ' + name;
};
