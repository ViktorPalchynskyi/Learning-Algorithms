const merge = (left, right) => {
    const res = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            res.push(left[leftIndex]);
            leftIndex++;
        } else {
            res.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        res.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        res.push(right[rightIndex]);
        rightIndex++;
    }

    return res;
};

const mergeSort = (a) => {
    if (!Array.isArray(a))
        throw new Error('Argument must be an array.');

    if (a.length <= 1) return a;

    const mid = Math.round(a.length / 2);
    const left = mergeSort(a.slice(0, mid));
    const right = mergeSort(a.slice(mid));

    return merge(left, right);
};

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); 
console.log(mergeSort([5, 1, 4, 2, 8])); 
console.log(mergeSort([1]));
console.log(mergeSort([])); 
