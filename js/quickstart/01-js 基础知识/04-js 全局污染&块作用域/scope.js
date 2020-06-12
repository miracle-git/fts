var i = 10;
for (var i = 0;i < 5;i++) {
// for (let i = 0;i < 5;i++) {
  console.log(i);
}
console.log(i); // 输入5，发生作用域穿透(修改为let可修复)