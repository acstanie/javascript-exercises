const add = function(num1, num2) {
  return num1 + num2; 
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;

  for(let number of array) {
    sum += number;
  }

  return sum;
};

const multiply = function(numbers) {
  let product = 1;

  for(let number of numbers) {
    product *= number;
  }

  return product;
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(number) {
  let product = 1;
	for(let i = number; i > 0; i--) {
    product *= i; 
  } 

  return product;
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
