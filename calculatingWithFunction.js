/* Calculating with functions
e.g. seven(plus(five())) -> 12

1. I approached with currying, but it's not.
2. Make operator functions return [kind of operation, rightOperand value]
3. Make number functions return in two cases, with arg or without arg.

BEST ANSWER:

function zero(operator) {
  return operator ? operator(0) : 0;
}
...

function plus(rightVal) {
  return function(leftVal) {
    return leftVal + rightVal;
  }
}
...

 */

function zero() {
  if (arguments.length !== 0) {
    return calculate(0, arguments);
  }
  return 0;
}
function one() {
  if (arguments.length !== 0) {
    return calculate(1, arguments);
  }
  return 1;
}
function two() {
  if (arguments.length !== 0) {
    return calculate(2, arguments);
  }
  return 2;
}
function three() {
  if (arguments.length !== 0) {
    return calculate(3, arguments);
  }
  return 3;
}
function four() {
  if (arguments.length !== 0) {
    return calculate(4, arguments);
  }
  return 4;
}
function five() {
  if (arguments.length !== 0) {
    return calculate(5, arguments);
  }
  return 5;
}
function six() {
  if (arguments.length !== 0) {
    return calculate(6, arguments);
  }
  return 6;
}
function seven() {
  if (arguments.length !== 0) {
    return calculate(7, arguments);
  }
  return 7;
}
function eight() {
  if (arguments.length !== 0) {
    return calculate(8, arguments);
  }
  return 8;
}
function nine() {
  if (arguments.length !== 0) {
    return calculate(9, arguments);
  }
  return 9;
}

function plus(rightOperand) {
  return ["plus", rightOperand];
}

function minus(rightOperand) {
  return ["minus", rightOperand];
}

function times(rightOperand) {
  return ["times", rightOperand];
}

function dividedBy(rightOperand) {
  return ["dividedBy", rightOperand];
}

function calculate(n, arg) {
  const operation = arg[0][0];
  const rightOperand = arg[0][1];
  switch (operation) {
    case "plus":
      return n + rightOperand;
    case "minus":
      return n - rightOperand;
    case "times":
      return n * rightOperand;
    case "dividedBy":
      return Math.floor(n / rightOperand);
    default:
      return n;
  }
}

module.exports = {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy
};
