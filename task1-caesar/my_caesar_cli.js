const fs = require('fs');
const path = require('path')
const { pipeline } = require('stream');
const { Command, program } = require('commander');
const Transform = require('./Transform.js');

const command = new Command();

command.storeOptionsAsProperties(true)
  .option('-s, --shift [shift]', 'shift', 0)
  .option('-i, --input [type]', 'input file',0)
  .option('-o, --output [type]', 'output file', 0)
  .option('-a, --action [action]', 'encode or decode', 0);

let shift;
if (process.argv[process.argv.indexOf('--shift') + 1] < 0 || process.argv[process.argv.indexOf('-s') + 1] < 0) {
  shift = process.argv[process.argv.indexOf('--shift') + 1];
  process.argv.splice(process.argv.indexOf('--shift') + 1, 1);
  command.parse(process.argv);
} else {
  command.parse(process.argv);
  shift = command.shift;
}

let input_stream;
if( command.input ) {
  if(!fs.existsSync(path.join(__dirname, command.input))){
    console.error(`no file ${command.input}`);
    return;
  }
  const input_stream_data = [path.join(__dirname, command.input), 'utf8'];
  input_stream = fs.createReadStream(...input_stream_data);
} else {
  input_stream = process.stdin;
}

let output_stream;
if( command.output ) {
  if(!fs.existsSync(path.join(__dirname, command.output))){
    console.error(`no file ${command.output}`);
    return;
  } 
  const output_stream_data = path.join(__dirname, command.output);
  output_stream = fs.createWriteStream(output_stream_data, {flags: 'a+'});
} else {
  output_stream = process.stdout;
}


const transform_stream_data = [Number(shift), command.action];
const transform_stream = new Transform(...transform_stream_data);


pipeline(
  input_stream,
  transform_stream,
  output_stream,
  (err) => {
    if (err) {
        console.error('Pipeline failed: ', err);
    } else {
        console.log('Pipeline succeeded.');
    }
  }
)