const path = require('path');
const fs = require('fs');

const getFileContent = (fileName, callback) => {
  const fullName = path.resolve(__dirname, '../data', fileName);
  fs.readFile(fullName, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    callback(JSON.parse(data.toString()));
  });
};

// callback hell
getFileContent('a.json', aData => {
  console.log('a data', aData);
  getFileContent(aData.next, bData => {
    console.log('b data', bData);
    getFileContent(bData.next, cData => {
      console.log('c data', cData);
    });
  });
});
