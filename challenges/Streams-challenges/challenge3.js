var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
 response.writeHead(200, {'Content-Type': 'text/html'});

 var file = fs.createReadStream('index.html');
 
 //response.end(file);
 
file.pipe(response);
console.log(file);

// var file = fs.createReadStream('fruits.txt');

// file.on('readable', function(){
//  var chunk;
//  while(null !== (chunk = file.read())){
//  console.log(chunk.toString());
//  }
// });
 
}).listen(3000);
