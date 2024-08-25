/**
 * Compute the arithmatic result without considering operator precedence.
 * For example: "2 + 6 / 5 " = (2 + 6) / 5 = 8 / 5 = 1.6
 * Note: built-in method parseFloat is allowed
 */
function foo(str) {
    let result = 0;
    let previousOperator = '+';
    let numberStartId = 0;
    for (let i=0; i<str.length; ++i) {
        const char = str[i];
        const isOperator = char === '+' || char === '-' || char === '*' || char === '/';
        if (isOperator) {
            result = operation(result, previousOperator, str, numberStartId, i);
            previousOperator = char;
            numberStartId = i + 1;
        }
    }

    result = operation(result, previousOperator, str, numberStartId, str.length);
    return result;
}

function operation(leftNumber, operator, str, numberStartId, numberStringEndId) {
    const subStr =  str.slice(numberStartId, numberStringEndId);
    const rightNumber = parseFloat(subStr);
    if(operator === '+') {
        return leftNumber + rightNumber;
    }
    else if(operator === '-') {
        return leftNumber - rightNumber;
    }
    else if(operator === '*') {
        return leftNumber * rightNumber;
    }
    return leftNumber / rightNumber;
}


let str = "2 + 3";
console.log(str, "=", foo(str));

str = "2 - 3";
console.log(str, "=", foo(str));

str = "2 * 3 - 8";
console.log(str, "=", foo(str));

str = "8 / 2 + 5";
console.log(str, "=", foo(str));

str = "2 + 8 / 5";
console.log(str, "=", foo(str));

str = "8 / 2  * 3 + 4";
console.log(str, "=", foo(str));

/* expected output:
2 + 3 = 5
2 - 3 = -1
2 * 3 - 8 = -2
8 / 2 + 5 = 9
2 + 8 / 5 = 2
8 / 2  * 3 + 4 = 16

*/