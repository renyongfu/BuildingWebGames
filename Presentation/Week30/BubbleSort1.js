
function bubbleSort(list) {
    for (let i = 0; i < list.length - 1; ++i) {
        for (let j = 0; j < list.length - 1 - i; ++j) {
            if (list[j] > list[j + 1]) {
                // Swap the elements
                const temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
}

const list = [5, 7, 8, 2, 3, 4, 10, 9, 1, 6];

console.log("Before sort: ", list);
bubbleSort(list);
console.log("After sort: ", list);
