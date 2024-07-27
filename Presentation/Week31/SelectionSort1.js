
// Selection sort algorithm
function selectionSort(list) {
    for (let i = 0; i < list.length; ++i) {
        // Find the minimum element in the remaining unsorted array
        let minIndex = i;
        for (let j = i + 1; j < list.length; ++j) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            const temp = list[i];
            list[i] = list[minIndex];
            list[minIndex] = temp;
        }
    }
}

const list = [5, 3, 7, 1, 11, 9];

console.log("Before sort: ", list);
selectionSort(list);
console.log("After sort: ", list);
