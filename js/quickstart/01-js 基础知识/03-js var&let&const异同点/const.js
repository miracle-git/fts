const name = 'Miracle';
// name = 'Miracle He'; // 不允许改变
function getName() {
  const name = 'Miracle He' // 此时的name只在当前的函数作用域内有效，不影响全局作用域的name
  console.log(name); // Miracle He
}
getName();
console.log(name); // Miracle
const user = { name: 'Miracle' }
user.name = 'Miracle He'; // const变量引用类型内部成员可改变
