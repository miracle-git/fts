const fs = require('fs');

fs.readdir('./src', (err, files) => {
  if (err) throw err;
  console.log(files);
});