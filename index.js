const Calculator = require('./MathOperations');
a = 4;
b = 2;

sum = Calculator.sum(a,b);
product = Calculator.product(a,b);
quotient = Calculator.quotient(a,b);
difference = Calculator.difference(a,b);
sqroot = Calculator.sqroot(a);
square = Calculator.square(a);

console.log("The sum is: " + sum);
console.log("The difference is: " + difference);
console.log("The product is: " + product);
console.log("The quotient is: " + quotient);
console.log("The square is: " + square);
console.log("The square root is: " + sqroot);