
/**
 * Find the minimum, maxium, the 2nd to maxium, and the mean from input array of numbers.
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

    // TODO

    return results;
}

/**
 * Update the input arr by reverting the items. For example [1,2, 3] would be update to [3,2,1]
 * Do not use the builtin methods such as Array.reverse
 */
function zar(arr) {
    // TODO

    return arr;
}

const array = [5, 3, 8, 2, 7, 1, 6, 4, 9, 10];

console.log("Search results: ", bar(array));
console.log("Reverting results: ", zar(array));
