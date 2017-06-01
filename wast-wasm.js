const fs = require('fs');
const wast = fs.readFileSync('./program.wast');
const wast2wasm = require('wast2wasm');

wast2wasm(wast, true).then(output => {
  console.log(output.buffer)
  console.log(output.log)
})