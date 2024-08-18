
/**
 * Find the minimum, maximum, the 2nd to maxium, and the mean from input array of numbers.
 * Do not use builtin methods such as Math.min, Math.max 
 * @param {} arr 
 * @returns 
 */
function bar(arr) {
    // Initialize
    const firstItem = arr[0];
    const results = {
        min: firstItem,
        max: firstItem,
        secondToMax: firstItem,
        mean: firstItem
    };

    // Iteratorate arr to find sumation, minimum and maxium using for loop
    let sum = 0;
    // TODO

    // Find secondToMax to maxium based on min and max using for loop
    let secondToMax = results.min;
    // TODO

    // Update results.secondToMax, results.mean using sum and secondToMax
    // TODO

    return results;
}

/**
 * Update the input arr by reverting the items. For example [1,2, 3] would be updated to [3,2,1]
 * Do not use the builtin methods such as Array.reverse
 */
function zar(arr) {
    // Get the arr length and half length
    const length = arr.length;
    const halfSize = Math.floor(length / 2);

    // Exchange the items
    for (let i = 0; i < halfSize; i++) {
        // TODO
    }

    return arr;
}

const array = [5, 3, 8, 2, 7, 1, 6, 4, 9, 10];

console.log("Search results: ", bar(array));
zar(array);
console.log("Reverting results: ", array);
