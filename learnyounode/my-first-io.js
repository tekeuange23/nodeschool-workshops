'use strict';
const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const fileContent = buffer.toString();
const fileLines = fileContent.split('\n').length - 1;

console.log(fileLines);
