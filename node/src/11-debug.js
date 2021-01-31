function test1() {
  const a = parseInt(Math.random() * 10);
  const b = parseInt(Math.random() * 10);

  const c = test2(a, b);
  return c;
}

function test2(a, b) {
  if (a > b) {
    a += a * 2;
  } else {
    b -= a;
  }
  return a + b;
}

test1();