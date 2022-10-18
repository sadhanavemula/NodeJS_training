// Import http module for developing web server
var http = require('http');

// Creating Web Server and listens request at port 3000
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url == '/') {
        res.write('<h2>Home Page</h2>');
        res.end();
    } else if (req.url == '/user') {
        res.write('<h2>User Page</h2>');
        res.end();
    } else if (req.url == '/admin') {
        res.write('<h2>Admin Page</h2>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h2 style="color:red;font-weight:bold">Invalid Request.</h2>');
        res.end();
    }
}).listen(3000, () => {
    console.log('The server is running at port 3000!!');
});