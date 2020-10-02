const { Transform } = require('stream');
const cipher  = require('./cipher.js');

module.exports = class T extends Transform {
  constructor(shift, code) {
    super();
    this.shift = shift;
    this.code = code;
  }
  _transform(chunk, encoding, done) {
    try{
      if(!!this.code && !!this.shift) {
        this.push(cipher(chunk, this.shift, this.code), encoding);
        done();
      } else {
        if(!this.code && !this.shift) {
          throw 'No action and shift!!!'
        } 
        if(!this.code) {
          throw 'No action!!!'
        }
        if(!!!this.shift) {
          throw 'No shift!!!'
        }  
      } 
    } catch (err) {
      done(err);
    }
  }
  _flush(done) {
    this.push('\n');
    done();
  }
};
