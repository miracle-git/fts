const fs = require('fs');

fs.rmdir('./demo', (err) => {
  if (err) throw err;
  console.log('done!');
});