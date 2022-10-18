// Import http module for developing web server
var http = require('http');

// Creating Web Server and listens request at port 3000
http.createServer((req, res) => {

    if (req.url == '/') {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end('<h2>Home Page</h2>');
    } else if (req.url == '/data') {
        res.setHeader('Content-Type', "text/csv");
        res.setHeader('Content-Disposition', "attachment;filename=myData.csv");
        res.writeHead(200);
        res.write(`id,name,email\n1,Bhawna,bhawna@gmail.com`);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h2 style="color:red;font-weight:bold">Invalid Request.</h2>');
        res.end();
    }
}).listen(3000, () => {
    console.log('The server is running at port 3000!!');
});