var fs = require ('fs');

var writableStream = fs.createWriteStream('./data/sampleDist.txt');

writableStream.write('some new data being written','utf-8');

writableStream.end();

writableStream.on('error',(error) =>{
    console.log('Error message' + error.message);
})

writableStream.on('finish',() =>{
    console.log('finished...');
})