var fs = require('fs');

// var reableStream = fs.createReadStream('fruits.txt');
// var writableStream = fs.createWriteStream('copyfruits.txt');
// reableStream.pipe(writableStream);
// console.log('Ended');

var file = fs.createReadStream('fruits.txt');
file.pipe(process.stdout);