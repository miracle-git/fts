const koa = require('./50-node-koa');
const app = koa();
const port = 8000;

app.use(async (ctx, next) => {
  console.log('第一层洋葱圈--开始');
  await next();
  const rt = ctx['X-Response-Time'];
  console.log(`${ctx.req.method} ${ctx.req.url} -- ${rt}`);
  console.log('第一层洋葱圈--结束');
});

app.use(async (ctx, next) => {
  console.log('第二层洋葱圈--开始');
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx['X-Response-Time'] = `${ms}ms`;
  console.log('第二层洋葱圈--结束');
});

app.use(async (ctx, next) => {
  console.log('第三层洋葱圈--开始');
  ctx.res.end('Hello Koa');
  console.log('第三层洋葱圈--结束');
});

app.listen(port, () => {
  console.log(`koa server is running on ${port}`);
});
