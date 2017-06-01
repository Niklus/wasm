const fs = require('fs');
const wasm = fs.readFileSync('./program.wasm');
const toolkit = require('wasm-json-toolkit')
const wasm2json = toolkit.wasm2json;
const json2wasm = toolkit.json2wasm;

// WASM to json
const json = wasm2json(wasm);
console.log(JSON.stringify(json, null, 2));

console.log('---------------------------')

// json to WASM
console.log(json2wasm(json));