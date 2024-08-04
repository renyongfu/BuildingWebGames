// Assume the input string consists of ${positive integer} ${operator +|-|*|/} ${positive integer}
// Parse the string and return the arithmatic computation result
// Tip: use function `parseInt` to get an integer from a sub-string
function simpleCalculator(input) {
  // Find the operator and its position in the input string
  let operator;
  let operatorIndex;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '+' || input[i] === '-' || input[i] === '*' || input[i] === '/') {
      operator = input[i];
      operatorIndex = i;
      break;
    }
  }

  if (!operator) {
    throw new Error("Invalid input format. No operator found.");
  }

  // Extract the two numbers from the input string
  const num1 = parseInt(input.slice(0, operatorIndex));
  const num2 = parseInt(input.slice(operatorIndex + 1));

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input format. Numbers not parsed correctly.");
  }

  // For given operator, compute and return the result
  let result;

  if (operator === '+') {
      result = num1 + num2;
  }
  else if(operator === '-') {
      result = num1 - num2;
  }
  else if (operator === '*') {
    result = num1 * num2;
  }
  else if (operator === '/') {
    if (num2 === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    result = num1 / num2;
  }
  else {
    throw new Error("Unknown operator.");
  }

  return result;
}

// Example usage:
console.log(simpleCalculator("3*8"));  // Output: 24
console.log(simpleCalculator("10+20"));  // Output: 30
console.log(simpleCalculator("10-2"));  // Output: 8
console.log(simpleCalculator("20/4"));  // Output: 5
