// 必须保证满足eslint规则(airbnb)
function add(x, y) {
  return x + y;
}

const sum = add(10, 20);
// eslint-disable-next-line
console.log(`sum = ${sum}`);
