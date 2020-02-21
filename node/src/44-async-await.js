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

const getFileData = async () => {
  const aData = await getFileContent('a.json');
  console.log('a data', aData);
  const bData = await getFileContent(aData.next);
  console.log('b data', bData);
  const cData = await getFileContent(bData.next);
  console.log('c data', cData);
};

getFileData();
