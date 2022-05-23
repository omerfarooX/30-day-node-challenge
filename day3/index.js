var fs = require('fs');
filename = 'data.txt';
var str = fs.readFileSync(filename).toString();
console.log(str);
var pattern = /man/gim;
var occurances = str.match(pattern);
console.log('occurances in string: ' + occurances.length);