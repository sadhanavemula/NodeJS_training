// Import fs Module:
var fs = require('fs');

// Read FileOne Synchronously(Blocking-Code)
var dataOne = fs.readFileSync('./data/fileOne.txt', 'utf-8');
console.log(dataOne);

// Read FileTwo Synchronously(Blocking-Code)
var dataTwo = fs.readFileSync('./data/fileTwo.txt', 'utf-8');
console.log(dataTwo);

