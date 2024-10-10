const findIndexInSortedArray = (arr, target) => {
    if (!Array.isArray(arr))
        throw new Error('Argument must be an array.');

    if (arr.length === 0) return -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            throw new Error('Array must be sorted.');
        }
    }

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.round((left + right) / 2);
        let elem = arr[mid];

        if (elem === target) {
            return mid;
        }

        if (elem < target) {
            left = mid + 1;
        }

        if (elem > target) {
            right = mid - 1;
        }
    }

    return -1;
};

console.log(findIndexInSortedArray([1, 2, 3, 4, 5], 3));
console.log(findIndexInSortedArray([1, 2, 3, 4, 5], 6));
console.log(findIndexInSortedArray([], 1));
console.log(findIndexInSortedArray([10, 20, 30, 40], 20));
