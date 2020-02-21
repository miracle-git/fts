const fs = require('fs');

fs.stat('./src/30-stat.js', (err, stats) => {
  if (err) {
    console.log('File isn\'t found!');
    return;
  }

  console.log(stats.isFile()); // true
  console.log(stats.isDirectory()); // false
  console.log(stats);
});