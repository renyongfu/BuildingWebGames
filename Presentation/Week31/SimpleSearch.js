const list = [1, 3, 5, 7, 9, 11, 13];

// Simple search
function search(arr, target) {
    for (let i=0; i< arr.length; ++i) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log("index of 1: ", search(list, 1));
console.log("index of 2: ", search(list, 2));
console.log("index of 7: ", search(list, 7));
