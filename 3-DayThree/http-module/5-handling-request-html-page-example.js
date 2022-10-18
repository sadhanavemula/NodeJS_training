var http = require('http');
var fs = require('fs').promises;

http.createServer((req, res) => {
    fs.readFile(__dirname + "/index.html")
        .then((content) => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(content);
        })
        .catch((error) => {
            res.writeHead(500);
            res.end(error);
            return;
        })
}).listen(3000, () => {
    console.log('The server is runnnig at port 3000!!');
})