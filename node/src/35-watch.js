const fs = require('fs');

fs.watch('./src', {
  recursive: true
}, (eventtype, filename) => {
  console.log(eventtype, filename);
});