const Koa = require('koa');
const app = new Koa();
const port = 8000;

app.use(async (ctx, next) => {
  console.log('第一层洋葱圈--开始');
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} -- ${rt}`);
  console.log('第一层洋葱圈--结束');
});

app.use(async (ctx, next) => {
  console.log('第二层洋葱圈--开始');
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  console.log('第二层洋葱圈--结束');
});

app.use(async (ctx, next) => {
  console.log('第三层洋葱圈--开始');
  ctx.body = 'Hello Koa';
  console.log('第三层洋葱圈--结束');
});

app.listen(port, () => {
  console.log(`koa server is running on ${port}`);
});
