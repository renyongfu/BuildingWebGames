// Convert the given string 'str' to an integer number without using parseInt
function foo(str) {
    let result = 0;
    let isNaN = true;

    let isNegative = false;
    let index = 0;

    // 1. Skip leading whitespaces
    for (; index < str.length; ++index) {
        if (str[index] !== ' ') {
            break;
        }
    }

    // 2. Handle optional leading sign
    if (str[index] === '-') {
        isNegative = true;
        index++;
    } else if (str[index] === '+') {
        index++;
    }

    // 3. Process the string one character at a time
    for (; index < str.length; ++index) {
        const char = str[index];

        // Ensure the character is a digit
        if (char >= '0' && char <= '9') {
            const digitValue = char - '0';
            result = result * 10 + digitValue;
            isNaN = false;
        } else {
            break; // Stop at the first non-digit character
        }
    }

    // 4. Apply the negative sign if needed
    if (isNegative) {
        result = -result;
    }

    if (isNaN) {
        return 'NaN'
    }
    return result;
}

// Examples:
console.log(foo("  +99"));   // Outputs: 99
console.log(foo("  123"));   // Outputs: 123
console.log(foo("-42"));     // Outputs: -42
console.log(foo("42abc"));   // Outputs: 42 (stops at non-digit)
console.log(foo("abc42"));   // Outputs: NaN (no digits at the start)
