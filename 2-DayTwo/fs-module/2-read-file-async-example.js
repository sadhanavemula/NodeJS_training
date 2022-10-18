// Import fs Module:
var fs = require('fs');

// Read fileOne Asynchronously(Non-Blocking Code)
fs.readFile('./data/fileOne.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});

// Read fileTwo Asynchronously(Non-Blocking Code)
fs.readFile('./data/fileTwo.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});