var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
buffer = buffer.toString();
var array = buffer.split('\n');
console.log(array.length-1);
