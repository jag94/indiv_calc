const MathOps = require('./MathOperations');

class Calculator {
    Add(a = null, b = null) {
        return this.Result = MathOps.sum(a, b);
    }
    Divide(a,b) {
        return this.Result = MathOps.quotient(a,b);
    }
    Multiply(a,b) {
        return this.Result = MathOps.product(a,b);
    }
    Subtract(a,b) {
        return this.Result = MathOps.difference(a,b);
    }
    Root(a,b) {
        return this.Result = MathOps.sqroot(a,b);
    }
    Square(a,b) {
        return this.Result = MathOps.square(a,b);
    }
}
module.exports = Calculator;