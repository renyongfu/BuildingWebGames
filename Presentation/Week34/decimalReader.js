// Convert the given string 'str' to an integer number without using parseInt
function foo(str) {
    let result = 0;
    let isNaN = true;

    // TODO

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
