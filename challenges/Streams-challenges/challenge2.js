var fs = require('fs');

var file = fs.createReadStream('fruits.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, { end: false });

file.on('end', function () {
 destFile.end('Finished!\n');
});

// By default, stream.end() is called on the destination Writable stream when the source Readable stream emits 'end', 
// so that the destination is no longer writable. To disable this default behavior, the end option can be passed as false, 
// causing the destination stream to remain open: