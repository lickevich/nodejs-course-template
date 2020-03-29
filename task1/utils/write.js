const fs = require('fs');

const write = filePath =>
  filePath ? fs.createWriteStream(filePath, { flags: 'a' }) : process.stdout;

module.exports = write;
