const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');

client.on('error', (err) => console.error(err));
// 测试
client.set('name', 'miracle', redis.print);
client.get('name', (err, val) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(val);
  client.quit();
});
