const { pipeline } = require('stream');
const CaesarCipher = require('./utils/transform');
const program = require('./utils/program');
const readStream = require('./utils/read');
const writeStream = require('./utils/write');

const args = program.opts();
const transformStream = new CaesarCipher(args);

pipeline(readStream(args), transformStream, writeStream(args.output), err => {
  if (err) {
    console.error('Pipeline failed.', err);
  } else {
    console.log('Pipeline succeeded.');
  }
});
