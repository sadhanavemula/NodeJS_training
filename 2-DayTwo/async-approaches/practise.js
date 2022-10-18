
var num1 = 100;
var num2 = 100;
var num3 = new Number(100);
var num4 = new Number(100);

console.log(num1 == num2);      // True
console.log(num1 === num2);     // True

console.log(num1 == num3);      // True
console.log(num1 === num3);     // False

console.log(num3 == num4);      // False
console.log(num3 === num4);     // False

// Result: True, True, False, True, True, False
/**
 * `==` operator does the type conversion of the operands before comparison. (Loose Equality)
 * `===' operator compares the value as well as the data type of the operands. (Strict Equality)
 */