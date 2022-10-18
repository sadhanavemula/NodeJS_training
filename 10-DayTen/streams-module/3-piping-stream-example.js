var fs = require ('fs');

var readableStream = fs.createReadStream('./data/a.txt');

var writableStream = fs.createWriteStream('./data/b.txt');

readableStream.pipe(writableStream);

console.log('ended');