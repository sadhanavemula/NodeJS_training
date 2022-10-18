var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.write('Hello Sadhana!!');
    res.end();
}).listen(3000);