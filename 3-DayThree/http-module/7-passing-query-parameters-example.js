var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {
    let q = url.parse(req.url, true).query;
    let msg = `Name: ${q.name} and Age: ${q.age}`;
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200);
    res.end(msg);
})

server.listen(3000, () => {
    console.log('The server is running at port 3000!!');
})
