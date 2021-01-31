const path = require('path');
const fs = require('fs');

const getFileContent = (fileName) => {
  return new Promise((resolve, reject) => {
    const fullName = path.resolve(__dirname, '../data', fileName);
    fs.readFile(fullName, (err, data) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      resolve(JSON.parse(data.toString()));
    });
  });
};

getFileContent('a.json').then(aData => {
  console.log('a data', aData);
  return getFileContent(aData.next);
}).then(bData => {
  console.log('b data', bData);
  return getFileContent(bData.next);
}).then(cData => {
  console.log('c data', cData);
});
