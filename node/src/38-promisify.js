const fs = require('fs');
const { promisify } = require('util');

const read = promisify(fs.readFile);

// read('./src/38-promisify.js').then(data => {
//   console.log(data.toString());
// }).catch(ex => {
//   console.log(ex);
// });

async function test() {
  try {
    const data = await read('./src/38-promisify.js');
    console.log(data.toString());
  } catch(ex) {
    console.log(ex);
  }
}

test();