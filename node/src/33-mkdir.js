const fs = require('fs');

fs.mkdir('./demo', (err) => {
  if (err) throw err;
  console.log('done!');
});