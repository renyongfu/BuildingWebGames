/**
 * Compute the arithmatic result without considering operator precedence.
 * For example: "2 + 6 / 5 " = (2 + 6) / 5 = 8 / 5 = 1.6
 * Note: built-in method parseFloat is allowed
 */
function foo(str) {
    let result = 0;
    // TODO
    return result;
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