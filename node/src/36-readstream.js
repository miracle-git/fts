const fs = require('fs');

const rs = fs.createReadStream('./src/36-readstream.js');
rs.pipe(process.stdout);