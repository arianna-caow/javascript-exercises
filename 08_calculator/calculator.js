const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
  let sums = 0;
  for (const i of arr){
    sums+=i;
  }
  return sums;
};

const multiply = function(arr) {
  let mult = 1;
  for (const i of arr){
    mult*=i;
  }
  return mult;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num==0){
    return 1;
  }
  return num*factorial(num-1);
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
