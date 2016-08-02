"strict mode";

/**
 * I noticed the tests looked like they were written in in ES5 (eg: using the
 * "var" keyword instead of "const" or "let") So I wrote ES5 compatible code.
 */


/**
 * Calculator
 */
function Calculator() {}

Calculator.prototype.add = function(a,b) {
  return a + b;
}

Calculator.prototype.subtract = function(a,b) {
  return a - b;
}

Calculator.prototype.multiply = function(a,b) {
  return a * b
}

Calculator.prototype.divide = function(a,b) {
  return (b === 0) ? Number.NaN : a / b;
}


/**
 * Scientific Calculator
 */
function ScientificCalculator() {}

ScientificCalculator.prototype = Object.create(Calculator.prototype);
ScientificCalculator.prototype.sin = Math.sin;
ScientificCalculator.prototype.cos = Math.cos;
ScientificCalculator.prototype.tan = Math.tan;
ScientificCalculator.prototype.log = Math.log;


/**
 * Functional Mixin
 */
function withExponents() {
  this.pow = Math.pow;

  this.multiplyExp = function(a,b) {
    return Math.pow(a[0], a[1]) * Math.pow(b[0], b[1]);
  }

  this.dividesExp = function(a,b) {
      return Math.pow(a[0], a[1]) / Math.pow(b[0], b[1]);
  }

  return this;
}


/**
 * Delay function
 */
function delay(ms, instance, method, args) {
  return new Promise(function(resolve, reject) {
    if (typeof instance[method] === 'undefined') {
      reject(Error('No such method ' + method ));
    } else {
      window.setTimeout(function() {
        resolve(instance[method].apply(null, args));
      }, ms);
    }
  });
}
