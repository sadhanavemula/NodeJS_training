var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html', (err, content) => {
        if (content) {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(content);
        }
        else {
            throw err;
        }
    });
    // fs.readFile(__dirname + "/index.html")
    //     .then((content) => {
    //         res.setHeader("Content-Type", "text/html");
    //         res.writeHead(200);
    //         // res.end("Hello string");
    //         res.end(content);
    //     })
    //     .catch((error) => {
    //         res.writeHead(500);
    //         res.end(error);
    //         return;
    //     })
}).listen(3000);