
/*
function addition(num1, num2) {
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
}

function subtract(num1, num2) {
    console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`)
}

function product(num1, num2) {
    console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`)
}

function division(num1, num2) {
    console.log(`The dividend of ${num1} and ${num2} is ${num1 / num2}`)
}

var maxTime = 100;
var minTime = 1;

module.exports.add = addition;
module.exports.subtract = subtract;
module.exports.product = product;
module.exports.division = division;
module.exports.maxTime = maxTime;
module.exports.minTime = minTime;
*/

var pi = 3.14;

module.exports = {
    minTime: 1,
    maxTime: 100,
    addition: function (num1, num2) {
        console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
    },
    subtract: function (num1, num2) {
        console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`)
    },
    product: function (num1, num2) {
        console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`)
    },
    division: function (num1, num2) {
        console.log(`The dividend of ${num1} and ${num2} is ${num1 / num2}`)
    }
}
module.exports.pi_value = pi;

