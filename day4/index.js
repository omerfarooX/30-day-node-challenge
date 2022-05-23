var fs = require('fs');
const {Console} = require('console');
console.time('division');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const print = new Console(output, errorOutput);

print.log('Hello World!');
print.error("Error : Error in Positioning Operands");
console.timeEnd('division');