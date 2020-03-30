/* eslint-disable no-process-exit */
/* eslint-disable no-sync */
const fs = require('fs');

const read = args => {
  const { input, output, action, shift } = args;
  const isOutputPath = fs.existsSync(output);
  const isInputPath = fs.existsSync(input);
  const shiftToNumber = Number.parseInt(shift, 10);

  if (isNaN(shiftToNumber)) {
    process.stderr.write('error: option "-s, --shift <num>" must be a number');
    process.exit(1);
  }
  if (shiftToNumber < 0 || shiftToNumber > 25) {
    process.stderr.write(
      'error: option "-s, --shift <num>" must be from 0 to 25'
    );
    process.exit(1);
  }
  if (output && !isOutputPath) {
    process.stderr.write('error: option "-o, --output" path is not available');
    process.exit(1);
  }
  if (action !== 'encode' && action !== 'decode') {
    process.stderr.write('error: option "-a, --action" must be encode/decode');
    process.exit(1);
  }
  if (input) {
    if (isInputPath) {
      return fs.createReadStream(input);
    }
    process.stderr.write('error: option "-i, --input" path is not available');
    process.exit(1);
  }
  return process.stdin;
};

module.exports = read;
