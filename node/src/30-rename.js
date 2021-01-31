const fs = require('fs');

fs.rename('./demo.txt', 'fs-demo.md', (err) => {
  if (err) throw err;
  console.log('done!');
});