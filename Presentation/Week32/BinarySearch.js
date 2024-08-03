const list = [1, 3, 5, 7, 9, 11, 13];

// Bindary Seaerch
function search(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midValue = arr[mid];

        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // Target not found
}


console.log("index of 1: ", search(list, 1));
console.log("index of 2: ", search(list, 2));
console.log("index of 7: ", search(list, 7));
