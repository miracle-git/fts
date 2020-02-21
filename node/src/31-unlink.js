const fs = require('fs');

fs.unlink('./fs-demo.md', (err) => {
  if (err) throw err;
  console.log('done!');
});