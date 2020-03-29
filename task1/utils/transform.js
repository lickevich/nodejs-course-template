/* eslint-disable no-process-exit */
const stream = require('stream');

class CaesarCipher extends stream.Transform {
  constructor(options) {
    super(options);
    this.shift = options.shift;
    this.input = options.input;
    this.output = options.output;
    this.action = options.action;
  }

  encode(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const c = text.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        result += String.fromCharCode(((c - 65 + shift) % 26) + 65);
      } else if (c >= 97 && c <= 122) {
        result += String.fromCharCode(((c - 97 + shift) % 26) + 97);
      } else {
        result += text.charAt(i);
      }
    }
    return result;
  }

  decode(text, shift) {
    let result = '';
    shift = (26 - shift) % 26;
    result = this.encode(text, shift);
    return result;
  }

  _transform(chunk, encoding, callback) {
    const myChunk = Buffer.from(chunk).toString();
    const shiftToNumber = Number.parseInt(this.shift, 10);

    if (this.action === 'encode') {
      this.push(this.encode(myChunk, shiftToNumber));
    }
    if (this.action === 'decode') {
      this.push(this.decode(myChunk, shiftToNumber));
    }
    callback();
  }
}

module.exports = CaesarCipher;
