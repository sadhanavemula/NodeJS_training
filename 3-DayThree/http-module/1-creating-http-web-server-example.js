// Import http module for developing web server
var http = require('http');


// Creating Web Server and listens request at port 3000
http.createServer((req, res) => {
    res.write('Hello Everyone!!');
    res.write('Lets Learn Node Fundamentals');
    res.end();
}).listen(3000, () => {
    console.log('The server is running at port 3000!!');
});