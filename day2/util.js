const fs = require('fs');

function parseData (file) {
  const data = fs.readFileSync(file, "utf8");
  const lines = data.split('\n').map(line => line.split(' ').map(strNum => Number(strNum)));
  return lines;
}

module.exports = parseData;