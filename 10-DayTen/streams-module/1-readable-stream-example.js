var fs = require ('fs');

var readableStream = fs.createReadStream('./data/sample.txt');

readableStream.setEncoding('utf-8');

var data = '';

readableStream.on('data', (chunks)=>{
    data += chunks;
})

readableStream.on('error',(error) =>{
    console.log('Error message' + error.message);
})

readableStream.on('end',() =>{
    console.log(data);
    console.log('Ended...');
})
