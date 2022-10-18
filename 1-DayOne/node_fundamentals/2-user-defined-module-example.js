// Import 'mathematics' module
var mathematics = require('./mathematics');

// Use Property and Methods from 'mathematics' module
mathematics.addition(100, 200);
mathematics.subtract(100, 200);
mathematics.product(100, 200);
mathematics.division(100, 200);
console.log(`The minTime is ${mathematics.minTime}`);
console.log(`The maxTime is ${mathematics.maxTime}`);
console.log(`The value of pi is ${mathematics.pi_value}`);