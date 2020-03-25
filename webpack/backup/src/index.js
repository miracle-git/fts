import $ from 'jquery';
// import $ from 'expose-loader?$!jquery';

require('./static/styles/index.css');
require('./static/styles/index.less');
require('@babel/polyfill');

console.log($);
console.log(window.$);

// console.log('miracle');
import { User, Student } from './static/scripts/demo';
import './static/scripts/image';

const miracle = new User('miracle', 32);
miracle.greeting();

const student = new Student(100, 'miracle', 32);
student.greeting();