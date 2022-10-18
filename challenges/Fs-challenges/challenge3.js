var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html', (err, content) => {
        if (content){
        res.writeHead(200);
        res.write(content);
        res.end();
        }
        else{
            throw err;
        }
    });
    // fs.readFile(__dirname + "/index.html")
    //     .then((content) => {
    //         res.writeHead(200);
    //         res.write(content);
    //         res.end();
    //     })
    //     .catch((error) => {
    //         res.writeHead(500);
    //         res.write(error);
    //         res.end();
    //         return;
    //     })
}).listen(3000);