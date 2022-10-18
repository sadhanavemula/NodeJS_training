
var http = require('http');

var books = JSON.stringify([
    { title: 'Java Fundamentals', author: 'ABC', price: 12000 },
    { title: 'Learning JavaScript', author: 'XYZ', price: 10000 },
    { title: 'Working with Async Approaches', author: 'ABC', price: 5000 },
    { title: 'NodeJS Integration', author: 'XYZ', price: 8000 }
])

var authors = JSON.stringify([
    { name: 'ABC', release_year: 2022 },
    { name: 'XYZ', release_year: 2021 }
])

var server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (req.url == '/books') {
        res.writeHead(200);
        res.end(books);
    } else if (req.url == '/authors') {
        res.writeHead(200);
        res.end(authors);
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Invalid Request.' }));
    }
})

server.listen(3000, () => {
    console.log('The server is running at port 3000!!');
})
