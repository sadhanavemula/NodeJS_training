var fs = require('fs');

// var contents = fs.readFileSync('index.html');
// console.log(contents);

fs.readFile('./data.txt', (err, contents) => {
    if (err) throw err;
    console.log(contents.toString());
});