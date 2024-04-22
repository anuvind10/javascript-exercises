const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
  return number1 - number2;
};

const sum = function(array) {
  let sum = 0;
  if (array.length == 0) {
    return 0;
  }
	for (let i = 0; i< array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const multiply = function(array) {
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }

  return product;

};

const power = function(number, toPower) {
  return Math.pow(number,toPower)
};

const factorial = function(number) {
  if (number == 0 || number == 1) return 1;
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
